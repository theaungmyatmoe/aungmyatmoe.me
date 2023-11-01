import '@/styles/globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AnalyticsWrapper } from '@/components/AnalyticsWrapper';
import Script from 'next/script';

export const metadata = {
    title: 'Aung Myat Moe - Software Engineer, Founder and Open Source Enthusiast',

    description:
        'I’m Aung Myat Moe, a software engineer and founder based in Letpadan. I’m the founder of Myanmar Cyber Youths and Web Dev Environment, where we develop technologies that empower regular people to explore space on their own terms.q'
};

export default async function RootLayout({ children }) {
    return (
        <>
            <html lang="en">
                <head />
                <body className="flex h-full flex-col bg-zinc-50 dark:bg-black">
                    <div className="fixed inset-0 flex justify-center sm:px-8">
                        <div className="flex w-full max-w-7xl lg:px-8">
                            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
                        </div>
                    </div>
                    <div className="relative">
                        <Header />
                        {children}
                    </div>
                    <Footer />
                    <AnalyticsWrapper />

                    <Script src="https://www.googletagmanager.com/gtag/js?id=G-6ZW1JW318K" />
                    <Script id="google-analytics">
                        {`
                              window.dataLayer = window.dataLayer || [];
                              function gtag(){dataLayer.push(arguments);}
                              gtag('js', new Date());

                              gtag('config', 'G-6ZW1JW318K');
                        `}
                    </Script>
                </body>
            </html>
        </>
    );
}
