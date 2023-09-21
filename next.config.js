/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    async redirects() {
        return [
            {
                source: '/en',
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
