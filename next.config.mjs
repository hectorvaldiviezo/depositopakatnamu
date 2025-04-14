/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '127.0.0.1',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'milla.grupopakatnamu.com',
                pathname: '**'
            },
            {
                protocol: 'http',
                hostname: '192.168.18.51',
                pathname: '**'
            },
        ]
    },
};

export default nextConfig;
