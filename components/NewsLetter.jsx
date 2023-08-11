'use client';

import { Button } from '@/components/Button';
import { MailIcon } from '@/components/icons';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { subscribeNewsletter } from '@/actions/subscribe-newsletter';
import { useTransition } from 'react';

const schema = z.object({
    email: z
        .string()
        .min(1, 'Email is required')
        .email("Email doesn't look right")
});
export default function Newsletter() {
    const [isPending, startTransition] = useTransition();
    const {
        register,
        getValues,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(schema)
    });
    const onSubmit = (data) => {
        startTransition(() => {
            console.log(data);
            subscribeNewsletter(data.email).then((r) => console.log(r));
        });
    };

    return (
        <form
            action="/thank-you"
            className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
            onSubmit={handleSubmit(onSubmit)}
        >
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <MailIcon className="h-6 w-6 flex-none" />
                <span className="ml-3">Stay up to date</span>
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Get notified when I publish something new, and unsubscribe at
                any time.
            </p>
            <div className="mt-6 flex">
                <input
                    type="text"
                    placeholder="Email address"
                    aria-label="Email address"
                    className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
                    {...register('email')}
                />
                <Button type="submit" className="ml-4 flex-none">
                    Join
                </Button>
            </div>
            <div>
                {errors.email?.message && (
                    <p className="text-xs mt-1 text-red-500">
                        {errors.email?.message}
                    </p>
                )}
                {!errors.email && getValues('email') && (
                    <p className="text-xs mt-1 text-teal-500">
                        Looks good! You'll hear from me soon.
                    </p>
                )}
            </div>
        </form>
    );
}
