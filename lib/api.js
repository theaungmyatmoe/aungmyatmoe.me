import {join} from "node:path";
import {readFile} from "node:fs/promises";
import glob from 'fast-glob'
import matter from "gray-matter";

export const contentsPath = join(process.cwd(), 'contents')

export const getAllSlugs = async () => {
    const paths = await glob(['*.mdx'], {
        cwd: contentsPath,
    })
    return paths.map(path => path.toLowerCase().trim().replace(/\.mdx$/, ''))
}

export const getArticleBySlug = async (slug) => {
    const articlePath = join(contentsPath, `${slug}.mdx`)
    const raw = await readFile(articlePath)
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

export const getAllArticles = async () => {

    const articleFiles = (await getAllSlugs())
        .map(async slug => await getArticleBySlug(slug))
    const articles = await Promise.all(articleFiles)

    return articles.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
}
