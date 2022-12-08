import {getArticleBySlug} from "@/lib/api";

export default function Head({params: {slug}}) {
    const {meta} = getArticleBySlug(slug)
    return (
        <>
            <title>{`${meta.title} - Aung Myat Moe`}</title>
            <meta name="description" content={meta.description}/>
        </>
    )
}