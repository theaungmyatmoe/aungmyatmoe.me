import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import {Container} from '@/components/Container'
import {GitHubIcon, LinkedInIcon, TwitterIcon,} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({className, href, children, icon: Icon}) {
    return (
        <li className={clsx(className, 'flex')}>
            <Link
                href={href}
                target="_blank"
                className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
            >
                <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"/>
                <span className="ml-4">{children}</span>
            </Link>
        </li>
    )
}

function MailIcon(props) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                fillRule="evenodd"
                d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
            />
        </svg>
    )
}

export default function About() {
    return (
        <>
            <Container className="mt-16 sm:mt-32">
                <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                    <div className="lg:pl-20">
                        <div className="max-w-xs px-2.5 lg:max-w-none">
                            <Image
                                src={portraitImage}
                                alt=""
                                sizes="(min-width: 1024px) 32rem, 20rem"
                                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                            />
                        </div>
                    </div>
                    <div className="lg:order-first lg:row-span-2">
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                            I’m Aung Myat Moe. I live in Letpadan, where I learn and develop for future.
                        </h1>
                        <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                            <p>
                                Letpadan is a small town where I grew up and had a buck of childhood memories. After I
                                got my hands wet with Javascript, I soon discovered my passion was programming while
                                hacking on some VPNs with Bash back in 2018.
                            </p>
                            <p>
                                I have about three years of experience as a web developer and love working with Laravel,
                                Vue, React, Next, and other hip frameworks. I have experience in developing web
                                services.
                            </p>
                            <p>
                                I enjoy building elegant, interactive effect heavy javascript applications with an eye
                                on animated content. In my spare time, I fancy playing football with my mates. Every
                                once in a while, I tend to explore catching-edge technologies.
                            </p>
                            <p>
                                Aside from work, I’ve worked on little projects over the years. Many of them are
                                open-source. Hence, you can check out and contribute the code if you see any matters and
                                ideas about how it should be enhanced and maintained.
                            </p>

                        </div>
                    </div>
                    <div className="lg:pl-20">
                        <ul role="list">
                            <SocialLink href="https://twitter.com/_amm834   " icon={TwitterIcon}>
                                Follow on Twitter
                            </SocialLink>
                            <SocialLink href="https://github.com/amm834" icon={GitHubIcon} className="mt-4">
                                Follow on GitHub
                            </SocialLink>
                            <SocialLink href="https://linkedin.com/in/aungmyatmoe" icon={LinkedInIcon}
                                        className="mt-4">
                                Follow on LinkedIn
                            </SocialLink>
                            <SocialLink
                                href="mailto:aungmyatmoe834@gmail.com"
                                icon={MailIcon}
                                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
                            >
                                aungmyatmoe834@gmail.com
                            </SocialLink>
                        </ul>
                    </div>
                </div>
            </Container>
        </>
    )
}
