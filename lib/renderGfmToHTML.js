import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'

/*
* @description Render markdown gfm content into html layout, you will need to convert to string in order to manipulate with rss feed generator
* */
export async function renderGfmToHTML(content) {
    return await unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype)
        .use(rehypeStringify)
        .process(content)
}