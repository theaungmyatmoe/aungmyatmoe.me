import {getArticleBySlug} from "@/lib/api";

export default async function ArticleHeadBySlug({params: {slug}}) {
    const {meta} = await getArticleBySlug(slug)
    return (
        <>
            <title>{`${meta.title} - Aung Myat Moe`}</title>
            <meta name="description" content={meta.description}/>
        </>
    )
}