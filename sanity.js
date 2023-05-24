import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

export const config = {
  apiVersion: '2021-03-25',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: false,
  
}

export const sanityClient = createClient(config)

export const urlFor = (source) => createImageUrlBuilder(config).image(source)
