import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {   
        domains: ['files.edgestore.dev'],
    },
    typescript: {
        // This is the default
        ignoreBuildErrors: false,
    },
 
};

export default withNextIntl(nextConfig);


