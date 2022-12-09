import {Card} from '@/components/Card'
import {SimpleLayout} from '@/components/SimpleLayout'
import {formatDate} from '@/lib/formatDate'
import {getAllArticles} from "@/lib/api";

function Article({article}) {
    return (
        <article className="md:grid md:grid-cols-4 md:items-baseline">
            <Card className="md:col-span-3">
                <Card.Title href={`/articles/${article.meta.slug}`}>
                    {article.meta.title}
                </Card.Title>
                <Card.Eyebrow
                    as="time"
                    dateTime={article.meta.date}
                    className="md:hidden"
                    decorate
                >
                    {formatDate(article.meta.date)}
                </Card.Eyebrow>
                <Card.Description>{article.meta.description}</Card.Description>
                <Card.Cta>Read article</Card.Cta>
            </Card>
            <Card.Eyebrow
                as="time"
                dateTime={article.meta.date}
                className="mt-1 hidden md:block"
            >
                {formatDate(article.meta.date)}
            </Card.Eyebrow>
        </article>
    )
}

export default async function ArticlePage() {

    const articles = await getAllArticles()

    return (
        <SimpleLayout
            title="Writing on programming,  what I've done and what I'm doing"
            intro="All of my long-form thoughts on programming, design patterns, and more, collected in chronological order."
        >
            <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                <div className="flex max-w-3xl flex-col space-y-16">
                    {articles.map(article => {
                        return <Article article={article} key={article.meta.slug}/>
                    })}
                </div>
            </div>
        </SimpleLayout>
    )
}

