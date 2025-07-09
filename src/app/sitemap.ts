import type {MetadataRoute} from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://magnusbnb.com/',
      lastModified: new Date()
    },
    {
      url: 'https://magnusbnb.com/',
      lastModified: new Date()
    },
    {
      url: 'https://magnusbnb.com/privacy-policy',
      lastModified: new Date()
    },
    {
      url: 'https://magnusbnb.com/terms-of-service',
      lastModified: new Date()
    }
  ]
}
