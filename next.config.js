/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        appDir: true,
        serverActions: true
    },
    async redirects() {
        return [
            {
                source: '/home',
                destination: '/',
                permanent: true
            },
            {
                source: '/admin',
                destination: '/admin/index.html',
                permanent: true
            }
        ];
    }
};
