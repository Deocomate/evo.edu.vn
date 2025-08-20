
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '127.0.0.1',
                port: '8000',
                pathname: '/userfiles/**',
            },
            {
                protocol: 'http',
                hostname: 'demo.ytyhomestaydaingan.vn',
                pathname: '/userfiles/**',
            },
            {
                protocol: 'https',
                hostname: 'demo.ytyhomestaydaingan.vn',
                pathname: '/userfiles/**',
            },
            {
                protocol: 'https',
                hostname: 'placehold.co',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'i.ytimg.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'admin.evo.edu.vn',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;