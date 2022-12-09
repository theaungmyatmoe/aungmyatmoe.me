import {getArticleBySlug} from "@/lib/api";

export default async function Head({params: {slug}}) {
    const {meta} = await getArticleBySlug(slug)
    return (
        <>
            <title>{`${meta.title} - Aung Myat Moe`}</title>
            <meta name="description" content={meta.description}/>
        </>
    )
}