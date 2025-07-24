import type {MetadataRoute} from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString()

  return [
    {
      url: 'https://www.magnusbnb.com/',
      lastModified
    },
    {
      url: 'https://www.magnusbnb.com/privacy-policy',
      lastModified
    },
    {
      url: 'https://www.magnusbnb.com/terms-of-service',
      lastModified
    }
  ]
}
