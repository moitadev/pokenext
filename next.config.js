/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'assets.pokemon.com',
            port: '',
            pathname: '/assets/cms2/img/pokedex/full/**',
          },
        ],
    },
}

module.exports = nextConfig
