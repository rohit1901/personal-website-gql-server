import {parse} from 'node-html-parser'
import metadataRuleSets from './rulesets'

const readHead = async (body: any) => {
    let head = "";
    for await (const chunk of body) {
        head += Buffer.from(chunk).toString();
        if (head.toString().split('</head>')[1] !== undefined) {
            head += `${head.toString().split('</head>')[0]}</head></html>`
            return head;
        }
    }
    return head;
}

const fetchHead = async (url: string) => {
    const res = await fetch(url);
    return readHead(res.body);
}

const makeUrlAbsolute = (url: string, path: any) =>
    new URL(path, new URL(url).origin).toString();
type Metadata = {
    url: string;
    [key: string]: string;
}
const fetchMetadata = async (dom: HTMLElement, url: string) => {
    const metadata: Metadata = {url};
    for (const [prop, ruleSet] of Object.entries(metadataRuleSets)) {
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
const fetchMeta = async (url: string) => {
    const head = await fetchHead(url);
    const dom: any = parse(head);
    return fetchMetadata(dom, url);
}
export default fetchMeta;