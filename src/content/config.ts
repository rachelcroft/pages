import { defineCollection, z } from "astro:content";

// Blog collection schema
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date().optional(),
    author: z.string().default("Rachel Croft"),
    categories: z.array(z.string()).default(["none"]),
    tags: z.array(z.string()).default(["none"]),
    complexity: z.number().default(1),
    draft: z.boolean().default(false),
  }),
});

// Food collection schema
const foodCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date().optional(),
    cover: image().optional(),
    author: z.string().optional(),
    draft: z.boolean().default(false),
    prep_time: z.number().optional(),
    servings: z.number().optional(),
    diet: z.string().optional(),
    ingredients: z.object({
      list: z.array(z.string()).optional(),
      qty: z.array(z.string()).optional(),
    }).optional(),
    instructions: z.array(z.string()).optional(),
    notes: z.array(z.string()).optional(),
  }),
});

// Export collections
export const collections = {
  blog: blogCollection,
  food: foodCollection,
};
