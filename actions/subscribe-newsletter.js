'use server';

import axios from 'axios';

export async function subscribeNewsletter(email) {
    await axios.post(
        `${process.env.CONVERTKIT_API_URL}/forms/${process.env.CONVERTKIT_FORM_ID}/subscribe`,
        {
            api_key: process.env.CONVERTKIT_API_KEY,
            email
        }
    );
}
