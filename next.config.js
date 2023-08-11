/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    experimental: {
        appDir: true,
    },
    async redirects() {
        return [
            {
                source: '/home',
                destination: '/',
                permanent: true,
            },
            {
                source: '/admin',
                destination: '/admin/index.html',
                permanent: true,
            }
        ]
    }
}
