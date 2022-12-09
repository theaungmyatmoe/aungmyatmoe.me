import {serialize} from "next-mdx-remote/serialize";
import rehypePrism from '@mapbox/rehype-prism'
import remarkGfm from "remark-gfm";

export default async function renderMarkdownToHTML(rawMarkdownSource) {
    return serialize(rawMarkdownSource,
        {
            mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypePrism],
                format: 'mdx'
            },
        })
}
