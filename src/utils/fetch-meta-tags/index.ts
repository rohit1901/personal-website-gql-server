import {HTMLElement, parse} from 'node-html-parser'
import {Readable} from 'stream';
import metadataRuleSets, {MetadataRuleSet} from './rulesets'

type Metadata = {
    url: string;
    [key: string]: string;
}

const readHead = async (body: Readable | null): Promise<string> => {
    if (!body) return '';
    const chunks = [];
    for await (const chunk of body) {
        chunks.push(chunk);
    }
    return chunks.reduce((acc, chunk) => {
        const part = Buffer.from(chunk).toString();
        acc += part;
        if (part.includes('</head>')) {
            return `${acc.split('</head>')[0]}</head></html>`;
        }
        return acc;
    }, '');
}

const fetchHead = async (url: string): Promise<string> => {
    const res = await fetch(url);
    return readHead(res.body as Readable | null);
}

const makeUrlAbsolute = (url: string, path: string): string =>
    new URL(path, new URL(url).origin).toString();

const fetchMetadata = async (dom: HTMLElement, url: string): Promise<Metadata> => {
    const metadata: Metadata = { url };
    for (const [prop, ruleSet] of Object.entries<MetadataRuleSet>(metadataRuleSets)) {
        const rule = ruleSet.rules.find(([selector]: [string]) => dom.querySelector(selector));
        if (rule) {
            const [selector, getValue] = rule;
            const el = dom.querySelector(selector);
            const data = getValue(el);
            metadata[prop] = ruleSet.absolute ? makeUrlAbsolute(url, data) : data;
        }
        if (!metadata[prop]) {
            metadata[prop] = ruleSet.defaultValue && makeUrlAbsolute(url, ruleSet.defaultValue);
        }
    }
    return metadata;
}

const fetchMeta = async (url: string): Promise<Metadata> => {
    const head = await fetchHead(url);
    const dom = parse(head);
    return fetchMetadata(dom, url);
}

export default fetchMeta;