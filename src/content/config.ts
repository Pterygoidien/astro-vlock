import { defineCollection, z } from "astro:content";

const mainCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
  type: "content",
});

export const collections = {
  home: mainCollection,
};
