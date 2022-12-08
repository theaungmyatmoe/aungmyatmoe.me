import {join} from "node:path";
import glob from 'fast-glob'
import matter from "gray-matter";
import {readFileSync} from "fs";

const contentsPath = join(process.cwd(), 'contents')
export const getAllSlugs = () => {
    const paths = glob.sync(`${contentsPath}/*.mdx`)
    return paths.map(path => {
        const lastPart = path
            .split('/')
            .at(-1)
        const [slug, _] = lastPart.split('.')
        return slug
    })
}

export const getArticleBySlug = (slug) => {
    const articlePath = join(contentsPath, `${slug}.mdx`)
    const raw = readFileSync(articlePath)
    const {content, data: meta} = matter(raw)

    return {
        content,
        meta: {
            ...meta,
            slug,
            date: (meta.date ?? new Date()).toString()
        }
    }
}

export const getAllArticles = () => {
    const articles = getAllSlugs()
        .map(slug => getArticleBySlug(slug))
        .sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
    return articles
}
