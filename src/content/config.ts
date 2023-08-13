import { defineCollection, z } from "astro:content";

const mainCollection = defineCollection({
  type: "content",
});

export const collections = {
  home: mainCollection,
};
