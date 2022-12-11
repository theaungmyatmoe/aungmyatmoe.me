import {defineConfig} from 'tinacms'

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main'

export default defineConfig({
    branch,
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID ?? null,
    token: process.env.TINA_TOKEN ?? null,
    build: {
        outputFolder: 'admin',
        publicFolder: 'public',
    },
    media: {
        tina: {
            mediaRoot: 'uploads',
            publicFolder: 'public',
        },
    },
    schema: {
        collections: [
            {
                name: 'articles',
                label: 'Articles',
                path: 'contents',
                format: 'mdx',
                fields: [
                    {
                        type: 'string',
                        name: 'title',
                        label: 'Title',
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: 'string',
                        name: 'description',
                        label: 'Description',
                        require: true
                    },
                    {
                        type: 'string',
                        name: 'excerpt',
                        label: 'Excerpt',
                        required: true
                    },
                    {
                        type: 'datetime',
                        name: 'date',
                        label: 'Date',
                        required: true
                    },
                    {
                        type: 'rich-text',
                        name: 'body',
                        label: 'Body',
                        isBody: true,
                    },
                ],
            },
        ],
    },
})
  