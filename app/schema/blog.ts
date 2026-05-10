import * as z from "zod";

export const BlogSchema = z.object({
    title: z.string().min(3, "Title is required").max(100, "Title must be less than 100 characters"),
    content: z.string().min(3, "Content is required").max(5000, "Content must be less than 5000 characters"),
})
