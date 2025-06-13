import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/', '/api/', '/studio/'],
    },
    sitemap: 'https://www.agnes-gillot.fr/sitemap.xml',
    host: 'https://www.agnes-gillot.fr',
  }
} 