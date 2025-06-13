/** @type {import('next').NextConfig} */
const nextConfig = {
  // Désactiver source maps en production pour réduire bundle size
  productionBrowserSourceMaps: false,
  
  // Activer le minifier SWC pour une compression optimale
  swcMinify: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
          port: '',
          pathname: '/**',
        },
      ],
      formats: ['image/webp', 'image/avif'],
      minimumCacheTTL: 31536000, // 1 year
      dangerouslyAllowSVG: true,
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
  
    // Optimize for Core Web Vitals
    experimental: {
      scrollRestoration: true,
    },
  
    // Compression and performance
    compress: true,
    poweredByHeader: false,
  
    // Font optimization
    optimizeFonts: true,
  
    // Bundle optimization
    webpack: (config, { dev, isServer }) => {
      // Production optimizations only
      if (!dev && !isServer) {
        // Enable tree shaking for better dead code elimination
        config.optimization.usedExports = true;
        config.optimization.sideEffects = false;
        
        // Compression maximale
        config.optimization.minimize = true;
        
        // Optimize chunks avec plus de granularité
        config.optimization.splitChunks = {
          chunks: 'all',
          minSize: 0,
          maxSize: 250000, // 250KB max par chunk
          cacheGroups: {
            // Séparer les gros packages
            sanityClient: {
              test: /[\\/]node_modules[\\/](@sanity\/client)[\\/]/,
              name: 'sanity-client',
              chunks: 'all',
              priority: 30,
            },
            sanityVision: {
              test: /[\\/]node_modules[\\/](@sanity\/vision)[\\/]/,
              name: 'sanity-vision',
              chunks: 'all',
              priority: 25,
            },
            sanityCore: {
              test: /[\\/]node_modules[\\/](sanity)[\\/]/,
              name: 'sanity-core',
              chunks: 'all',
              priority: 20,
            },
            react: {
              test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
              name: 'react',
              chunks: 'all',
              priority: 15,
            },
            heroicons: {
              test: /[\\/]node_modules[\\/](@heroicons)[\\/]/,
              name: 'heroicons',
              chunks: 'all',
              priority: 12,
            },
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendor',
              chunks: 'all',
              priority: 10,
              maxSize: 200000, // 200KB max pour vendor
            },
          },
        };
        
        // Exclure certains modules lourds du SSR si possible
        config.externals = config.externals || [];
      }
      
      // Optimize imports for specific libraries
      config.resolve.alias = {
        ...config.resolve.alias,
        // Force tree-shaking for heroicons
        '@heroicons/react/24/outline': '@heroicons/react/24/outline/index.js',
        '@heroicons/react/24/solid': '@heroicons/react/24/solid/index.js',
      };
      
      return config;
    },
  
    // Transpile only necessary packages
    transpilePackages: ['@sanity/ui'],
  
    // Headers for better caching and performance
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
            {
              key: 'Referrer-Policy',
              value: 'strict-origin-when-cross-origin',
            },
          ],
        },
        {
          source: '/img/(.*)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
        {
          source: '/_next/static/(.*)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
      ];
    },
  }
  
  export default nextConfig