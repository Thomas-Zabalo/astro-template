import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.string(),
      image: z.object({
        src: z.string(),
        alt: z.string()
      }),
    })
});

export const collections = {
  projects: projectsCollection,
};