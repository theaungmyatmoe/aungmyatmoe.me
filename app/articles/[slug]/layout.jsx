import ArticleLayout from "@/components/ArticleLayout";

export default function ArticleLayoutWithSlug({children}) {
    return (
        <>
            <ArticleLayout>{children}</ArticleLayout>
        </>
    )
}