import Image from 'next/image'

import {Card} from '@/components/Card'
import {SimpleLayout} from '@/components/SimpleLayout'
import logoWuttyi from '@/images/logos/wuttyi.svg'
import logoYoursNvim from '@/images/logos/logoYoursNvim.png'
import logoAungMyatMoe from '@/images/avatar.jpg'
import logoRina from '@/images/logos/logoRina.jpg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoMeow from '@/images/logos/meow-min.png'


const projects = [
    {
        name: 'My Intuitive Portfolio',
        description: 'This is my portfolio and blog which was crafted to share my projects and knowledge and resume.',
        link: {href: 'https://github.com/amm834/aungmyatmoe.me', label: 'https://github.com/amm834/aungmyatmoe.me'},
        logo: logoAungMyatMoe,
    },
    {
        name: 'Wuttyi Lang',
        description:
            'LISP (or) Schema like Functional and OOP supported programming language',
        link: {
            href: 'https://wuttyi.vercel.app/',
            label: 'https://wuttyi.vercel.app/'
        },
        logo: logoWuttyi,
    },
    {
        name: 'Yours.Nvim',
        description:
            'The next level minimalist IDE layer for nvim which was inspired by the new UI of Jetbrains IDE',
        link: {
            href: 'https://github.com/amm834/yours.nvim',
            label: 'https://github.com/amm834/yours.nvim'
        },
        logo: logoYoursNvim,
    },
    {
        name: 'Rina PHP Framework',
        description:
            'Rina is a MVC powered PHP MVC framework which upscale your PHP web application',
        link: {
            href: 'https://github.com/amm834/rina-php-mvc-framework',
            label: 'https://github.com/amm834/rina-php-mvc-framework'
        },
        logo: logoRina,
    },
    {
        name: 'Painify Credit Card Validator',
        description:
            'Painify is a credit card number validator built on the top of luhn algorithm.',
        link: {
            href: 'https://github.com/amm834/cc',
            label: 'https://github.com/amm834/cc'
        },
        logo: logoPlanetaria,
    },
    {
        name: 'Omini Food',
        description:
            'Ominifood is a food delivering website built to recap CSS',
        link: {
            href: 'https://ominifood.vercel.app/',
            label: 'https://ominifood.vercel.app/'
        },
        logo: logoPlanetaria,
    },
    {
        name: 'Natour',
        description:
            'Natour is a travel service provider website which was developed to learn SCSS in depth.',
        link: {
            href: 'https://natour-solo.vercel.app/',
            label: 'https://natour-solo.vercel.app/'
        },
        logo: logoPlanetaria,
    },
    {
        name: 'Meow',
        description:
            'Meow is a package manager for the Termux which is faster than built-in package manager.',
        link: {
            href: 'https://github.com/amm834/meow',
            label: 'https://github.com/amm834/meow'
        },
        logo: logoMeow,
    },

]

function LinkIcon(props) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                fill="currentColor"
            />
        </svg>
    )
}

export default function Projects() {
    return (
        <>
            <SimpleLayout
                title="Talk is cheap, here is the list of my open source projects"
                intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
            >
                <ul
                    role="list"
                    className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {projects.map((project) => (
                        <Card as="li" key={project.name}>
                            <div
                                className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                <Image
                                    src={project.logo}
                                    alt={project.name}
                                    className="h-8 w-8 rounded-full"
                                    width="30"
                                    height="30"
                                    unoptimized
                                    blurDataURL={'add'}
                                />
                            </div>
                            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                                <Card.Link href={project.link.href}>{project.name}</Card.Link>
                            </h2>
                            <Card.Description>{project.description}</Card.Description>
                            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                                <LinkIcon className="h-6 w-6 flex-none"/>
                                <span className="ml-2">{project.link.label}</span>
                            </p>
                        </Card>
                    ))}
                </ul>
            </SimpleLayout>
        </>
    )
}
