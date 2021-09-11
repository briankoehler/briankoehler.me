/** @type {import('next').NextConfig} */

module.exports = {
    reactStrictMode: true,
    images: {
        domains: ['localhost', process.env.CMS_URL]
    }
}
