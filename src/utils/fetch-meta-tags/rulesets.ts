type Element = {
    getAttribute: (arg0: any) => any
    [key: string]: any
}
const attr = (element: { getAttribute: (arg0: any) => any }, attribute: string) => element.getAttribute(attribute);

export type MetadataRuleSet = {
    title: {
        rules: [string, (e: Element) => any][]
    },
    description: {
        rules: [string, (e: Element) => any][]
    },
    icon: {
        rules: [string, (e: Element) => any][]
        defaultValue: string
        absolute: boolean
    },
    image: {
        rules: [string, (e: Element) => any][]
        absolute: boolean
    }
    [key: string]: any;
}

export default {
    title: {
        rules: [
            ['meta[property="og:title"]', (e: Element) => attr(e, 'content')],
            ['meta[name="twitter:title"]', (e: Element) => attr(e, 'content')],
            ['meta[property="twitter:title"]', (e: Element) => attr(e, 'content')],
            ['title', (e: Element) => e.text],
        ],
    },

    description: {
        rules: [
            ['meta[property="og:description"]', (e: Element) => attr(e, 'content')],
            ['meta[name="description" i]', (e: Element) => attr(e, 'content')],
        ],
    },

    icon: {
        rules: [
            ['link[rel="apple-touch-icon"]', (e: Element) => attr(e, 'href')],
            ['link[rel="apple-touch-icon-precomposed"]', (e: Element) => attr(e, 'href')],
            ['link[rel="icon" i]', (e: Element) => attr(e, 'href')],
        ],
        defaultValue: 'favicon.ico',
        absolute: true,
    },

    image: {
        rules: [
            ['meta[property="og:image:secure_url"]', (e: Element) => attr(e, 'content')],
            ['meta[property="og:image:url"]', (e: Element) => attr(e, 'content')],
            ['meta[property="og:image"]', (e: Element) => attr(e, 'content')],
            ['meta[name="twitter:image"]', (e: Element) => attr(e, 'content')],
            ['meta[property="twitter:image"]', (e: Element) => attr(e, 'content')],
            ['meta[name="thumbnail"]', (e: Element) => attr(e, 'content')],
        ],
        absolute: true,
    },
} as MetadataRuleSet;