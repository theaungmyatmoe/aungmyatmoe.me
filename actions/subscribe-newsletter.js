'use server';

export async function subscribeNewsletter(email) {
    try {
        await fetch(
            `${process.env.CONVERTKIT_API_URL}/forms/${process.env.CONVERTKIT_FORM_ID}/subscribe`,
            {
                method: 'POST',
                body: JSON.stringify({
                    api_key: process.env.CONVERTKIT_API_KEY,
                    email
                })
            }
        );
        return { status: 'subscribed' };
    } catch (error) {
        return { status: 'error', error: error.message || error.toString() };
    }
}
