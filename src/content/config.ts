import { defineCollection, z } from "astro:content";

const mainCollection = defineCollection({});

export const collections = {
  home: mainCollection,
};
