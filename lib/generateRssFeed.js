import {Feed} from 'feed'
import {mkdir, writeFile} from 'fs/promises'
import {getAllArticles} from "@/lib/api";


export async function generateRssFeed() {
    let articles = await getAllArticles()
    let siteUrl = process.env.NEXT_PUBLIC_SITE_URL
    let author = {
        name: 'Aung Myat Moe',
        email: 'aungmyatmoe834@gmail.com',
    }

    let feed = new Feed({
        title: author.name,
        description: "Writing on programming, what I've done and what I'm doing",
        author,
        id: siteUrl,
        link: siteUrl,
        image: `${siteUrl}/favicon.ico`,
        favicon: `${siteUrl}/favicon.ico`,
        copyright: `All rights reserved ${new Date().getFullYear()}, ${author.name}`,
        feedLinks: {
            rss2: `${siteUrl}/rss/feed.xml`, json: `${siteUrl}/rss/feed.json`,
        },
    })


    for (let article of articles) {
        let url = `${siteUrl}/articles/${article.meta.slug}`

        feed.addItem({
            title: article.meta.title,
            id: url,
            link: url,
            description: article.meta.description,
            content: article.content,
            author: [author],
            contributor: [author],
            date: new Date(article.meta.date),
        })
    }

    await mkdir('./public/rss', {recursive: true})
    await Promise.all([
        writeFile('./public/rss/feed.xml', feed.rss2(), 'utf8'),
        writeFile('./public/rss/feed.json', feed.json1(), 'utf8'),
    ])
}
