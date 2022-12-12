import '@/styles/globals.css'
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";

export default async function RootLayout({children}) {
    return (
        <>
            <html lang="en">
            <head/>
            <body className="flex h-full flex-col bg-zinc-50 dark:bg-black">
            <div className="fixed inset-0 flex justify-center sm:px-8">
                <div className="flex w-full max-w-7xl lg:px-8">
                    <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"/>
                </div>
            </div>
            <div className="relative">
                <Header/>
                {children}
                <Footer/>
            </div>
            </body>
            </html>
        </>
    )
}
