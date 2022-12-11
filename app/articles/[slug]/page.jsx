import {getAllArticles, getArticleBySlug} from "@/lib/api";
import {formatDate} from "@/lib/formatDate";
import {Prose} from "@/components/Prose";
import MDXRemote from "@/components/MDXRemote";
import ArticleLayout from "@/components/ArticleLayout";
import renderMarkdownToHTML from "@/lib/renderMarkdownToHTML";


const components = {}
export default async function ArticlePageBySlug({params: {slug}}) {

    const {meta, content} = await getArticleBySlug(slug)
    const mdxSource = await renderMarkdownToHTML(content)

    return (
        <>
            <header className="flex flex-col">
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                    {meta.title}
                </h1>
                <time
                    dateTime={meta.date}
                    className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
                >
                    <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"/>
                    <span className="ml-3">{formatDate(meta.date)}</span>
                </time>
            </header>
            <Prose className="mt-8">
                <MDXRemote {...mdxSource} components={components}/>
            </Prose>
            <article>
            </article>
        </>
    )
}

export async function generateStaticParams() {
    const articles = await getAllArticles();

    return articles.map((article) => ({
        slug: article.meta.slug,
    }));
}