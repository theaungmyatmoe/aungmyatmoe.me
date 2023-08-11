import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Container } from '@/components/Container';
import {
    GitHubIcon,
    InstagramIcon,
    LinkedInIcon,
    TwitterIcon
} from '@/components/SocialIcons';
import { formatDate } from '@/lib/formatDate';
import { getAllArticles } from '@/lib/api';
import { generateRssFeed } from '@/lib/generateRssFeed';

import image1 from '@/images/photos/image-1.jpg';
import image2 from '@/images/photos/image-2.jpg';
import image3 from '@/images/photos/image-3.jpg';
import image4 from '@/images/photos/image-4.jpg';
import image5 from '@/images/photos/image-5.jpg';

import { MailIcon, BriefcaseIcon, ArrowDownIcon } from '@/components/icons';

import logoWde from '@/images/logos/companies/wde.jpg';
import logoUpwork from '@/images/logos/companies/upwork.png';
import logoMcy from '@/images/logos/companies/mcy.jpg';
import logoTheRecruiterMyanmar from '@/images/logos/companies/the_recruiter_myanmar.png';
import logoBinaryLab from '@/images/logos/companies/binary_lab.png';
import logoTechstars from '@/images/logos/companies/techstars.png';
import logoGlobalInnovationConsulting from '@/images/logos/companies/gic.png';

import Newsletter from '@/components/NewsLetter';

function Article({ article }) {
    return (
        <Card as="article">
            <Card.Title href={`/articles/${article.meta.slug}`}>
                {article.meta.title}
            </Card.Title>
            <Card.Eyebrow as="time" dateTime={article.meta.date} decorate>
                {formatDate(article.meta.date)}
            </Card.Eyebrow>
            <Card.Description>{article.meta.description}</Card.Description>
            <Card.Cta>Read article</Card.Cta>
        </Card>
    );
}

function SocialLink({ icon: Icon, ...props }) {
    return (
        <Link className="group -m-1 p-1" {...props} target="_blank">
            <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        </Link>
    );
}

const Resume = () => {
    let resume = [
        {
            company: 'GIC',
            title: 'Senior Software Engineer',
            logo: logoGlobalInnovationConsulting,
            start: '2023 Aug',
            end: {
                label: 'Present',
                dateTime: new Date().getFullYear()
            }
        },
        {
            company: 'Techstars',
            title: 'Technical Lead',
            logo: logoTechstars,
            start: '2023 Feb',
            end: '2023 Jul'
        },
        {
            company: 'Binary Lab',
            title: 'Senior Software Engineer',
            logo: logoBinaryLab,
            start: '2023 Feb',
            end: '2023 Jun'
        },
        {
            company: 'The Recruiter Myanmar',
            title: 'Software Engineer',
            logo: logoTheRecruiterMyanmar,
            start: '2021 Feb',
            end: '2021 Apr'
        },
        {
            company: 'Web Developer Environment',
            title: 'Founder',
            logo: logoWde,
            start: '2019',
            end: {
                label: 'Present',
                dateTime: new Date().getFullYear()
            }
        },
        {
            company: 'Myanmar Cyber Youths',
            title: 'Founder',
            logo: logoMcy,
            start: '2021',
            end: {
                label: 'Present',
                dateTime: new Date().getFullYear()
            }
        },
        {
            company: 'Upwork',
            title: 'Full Stack Engineer',
            logo: logoUpwork,
            start: '2019 Apr',
            end: '2023 Feb'
        }
    ];

    return (
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <BriefcaseIcon className="h-6 w-6 flex-none" />
                <span className="ml-3">Work</span>
            </h2>
            <ol className="mt-6 space-y-4">
                {resume.map((role, roleIndex) => (
                    <li key={roleIndex} className="flex gap-4">
                        <div className="p-2 relative mt-1 flex overflow-hidden object-contain  h-12 w-12 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                            <Image
                                src={role.logo}
                                alt="Role Image"
                                width={48}
                                height={48}
                                className="rounded-full"
                                unoptimized
                            />
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">Company</dt>
                            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                {role.company}
                            </dd>
                            <dt className="sr-only">Role</dt>
                            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                                {role.title}
                            </dd>
                            <dt className="sr-only">Date</dt>
                            <dd
                                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                                aria-label={`${
                                    role.start.label ?? role.start
                                } until ${role.end.label ?? role.end}`}
                            >
                                <time
                                    dateTime={role.start.dateTime ?? role.start}
                                >
                                    {role.start.label ?? role.start}
                                </time>{' '}
                                <span aria-hidden="true">—</span>{' '}
                                <time dateTime={role.end.dateTime ?? role.end}>
                                    {role.end.label ?? role.end}
                                </time>
                            </dd>
                        </dl>
                    </li>
                ))}
            </ol>
            <Button
                href="https://docs.google.com/document/d/1KbaqyAm9h_UqUCbCDZwn3jxb6Y68qKh7HDhbuDjKCJM/edit?usp=sharing"
                variant="secondary"
                className="group mt-6 w-full"
            >
                Download CV
                <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
            </Button>
        </div>
    );
};

function Photos() {
    let rotations = [
        'rotate-2',
        '-rotate-2',
        'rotate-2',
        'rotate-2',
        '-rotate-2'
    ];

    return (
        <div className="mt-16 sm:mt-20">
            <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
                {[image1, image2, image3, image4, image5].map(
                    (image, imageIndex) => (
                        <div
                            key={image.src}
                            className={clsx(
                                'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
                                rotations[imageIndex % rotations.length]
                            )}
                        >
                            <Image
                                src={image}
                                alt=""
                                sizes="(min-width: 640px) 18rem, 11rem"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

export default async function Home() {
    if (process.env.NODE_ENV === 'production') {
        await generateRssFeed();
    }

    const articles = (await getAllArticles()).slice(0, 5);

    return (
        <>
            <Container className="mt-9">
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                        Software Engineer, Founder and Open Source Enthusiast
                    </h1>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                        I’m Aung Myat Moe, a software engineer and founder based
                        in Letpadan. I’m the founder of Myanmar Cyber Youths and
                        Web Dev Environment, where we develop technologies that
                        empower regular people to explore space on their own
                        terms.
                    </p>
                    {/* Social icons */}
                    <div className="mt-6 flex gap-6">
                        <SocialLink
                            href="https://twitter.com/_amm834"
                            aria-label="Follow on Twitter"
                            icon={TwitterIcon}
                        />
                        <SocialLink
                            href="https://www.instagram.com/_aungmyatmoe/"
                            aria-label="Follow on LinkedIn"
                            icon={InstagramIcon}
                        />
                        <SocialLink
                            href="https://github.com/amm834"
                            aria-label="Follow on GitHub"
                            icon={GitHubIcon}
                        />
                        <SocialLink
                            href="https://linkedin.com/in/AungMyatMoe"
                            aria-label="Follow on LinkedIn"
                            icon={LinkedInIcon}
                        />
                    </div>
                </div>
            </Container>
            <Photos />
            <Container className="mt-20 md:mt-20">
                <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                    <div className="flex flex-col gap-16">
                        {articles.map((article) => (
                            <Article
                                key={article.meta.slug}
                                article={article}
                            />
                        ))}
                    </div>
                    <div className="space-y-10 lg:pl-16 xl:pl-24">
                        <Newsletter />
                        <Resume />
                    </div>
                </div>
            </Container>
        </>
    );
}
