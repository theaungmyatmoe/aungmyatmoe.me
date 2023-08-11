import React from 'react';
import { Container } from '@/components/Container';

const Page = () => {
    return (
        <Container className="mt-20 md:mt-20">
            <div className="sm:px-8 mt-16 sm:mt-32">
                <div className="mx-auto w-full max-w-7xl lg:px-8">
                    <div className="relative px-4 sm:px-8 lg:px-12">
                        <div className="mx-auto max-w-2xl lg:max-w-5xl">
                            <header className="max-w-2xl">
                                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                                    Thanks for subscribing.
                                </h1>
                                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                                    Please check your inbox and confirm your
                                    email address especially in the{' '}
                                    <span className="text-teal-500 font-semibold">
                                        important
                                    </span>{' '}
                                    folder. I’ll send you an email any time I
                                    publish a new blog post, release a new
                                    project, or have anything interesting to
                                    share that I think you’d want to hear about.
                                    You can unsubscribe at any time, no hard
                                    feelings.
                                </p>
                            </header>
                            <div className="mt-16 sm:mt-20"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Page;
