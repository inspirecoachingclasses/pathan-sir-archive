import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['Quote', 'Video', 'Podcast', 'Visual', 'Philosophy']),
    author: z.string().default('पठाण सर'),
    quoteText: z.string().optional(),
    source: z.string().optional(),
    videoUrl: z.string().optional(),
    imageUrl: z.string().optional(),
    imageCaption: z.string().optional(),
    podcastSeries: z.string().optional(),
    podcastEpisode: z.string().optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  posts: postsCollection,
};
