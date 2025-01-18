import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://ncmc.com.sa";

  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/ar', '/en', "/ar/legal/privacy-policy", "/en/legal/privacy-policy"],
      disallow: [],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}