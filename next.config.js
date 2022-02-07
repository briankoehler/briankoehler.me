/** @type {import('next').NextConfig} */

module.exports = {
    reactStrictMode: true,
    images: {
        domains: ['localhost', 'media.giphy.com', process.env.CMS_URL]
    },
    webpack: (config, { webpack }) => {
        /* Hide error "Critical dependency: the request of a dependency is an expression" from remark-textr */
        config.plugins.push(
            new webpack.ContextReplacementPlugin(/power-assert-formatter/)
        )

        return config
    }
}
