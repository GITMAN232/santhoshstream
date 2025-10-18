import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

export const getProjects = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("projects").collect();
  },
});

export const getSkills = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("skills").collect();
  },
});

export const getHobbies = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("hobbies").collect();
  },
});

export const getDesigns = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("designs").collect();
  },
});

export const addProject = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    image: v.string(),
    tools: v.array(v.string()),
    link: v.optional(v.string()),
    github: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("projects", args);
  },
});

export const addSkill = mutation({
  args: {
    name: v.string(),
    category: v.string(),
    rating: v.number(),
    icon: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("skills", args);
  },
});

export const addHobby = mutation({
  args: {
    name: v.string(),
    description: v.string(),
    icon: v.string(),
    category: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("hobbies", args);
  },
});

export const addDesign = mutation({
  args: {
    title: v.string(),
    caption: v.string(),
    image: v.string(),
    category: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("designs", args);
  },
});

export const updateSkill = mutation({
  args: {
    id: v.id("skills"),
    name: v.optional(v.string()),
    category: v.optional(v.string()),
    rating: v.optional(v.number()),
    icon: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args;
    return await ctx.db.patch(id, updates);
  },
});

export const updateMultipleSkills = mutation({
  args: {
    updates: v.array(v.object({
      id: v.id("skills"),
      icon: v.string(),
    })),
  },
  handler: async (ctx, args) => {
    for (const update of args.updates) {
      await ctx.db.patch(update.id, { icon: update.icon });
    }
  },
});

export const deleteProject = mutation({
  args: {
    id: v.id("projects"),
  },
  handler: async (ctx, args) => {
    return await ctx.db.delete(args.id);
  },
});

export const updateProject = mutation({
  args: {
    id: v.id("projects"),
    title: v.optional(v.string()),
    description: v.optional(v.string()),
    image: v.optional(v.string()),
    tools: v.optional(v.array(v.string())),
    link: v.optional(v.string()),
    github: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args;
    return await ctx.db.patch(id, updates);
  },
});