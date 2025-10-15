import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const seedPortfolioData = mutation({
  args: {},
  handler: async (ctx) => {
    // Add Skills
    const skills = [
      { name: "React", category: "Frontend", rating: 5, icon: "⚛️" },
      { name: "TypeScript", category: "Frontend", rating: 5, icon: "📘" },
      { name: "Node.js", category: "Backend", rating: 4, icon: "🟢" },
      { name: "Python", category: "Backend", rating: 4, icon: "🐍" },
      { name: "TailwindCSS", category: "Design", rating: 5, icon: "🎨" },
      { name: "Figma", category: "Design", rating: 4, icon: "🎭" },
      { name: "MongoDB", category: "Database", rating: 4, icon: "🍃" },
      { name: "AWS", category: "Cloud", rating: 3, icon: "☁️" },
    ];

    for (const skill of skills) {
      await ctx.db.insert("skills", skill);
    }

    // Add Hobbies
    const hobbies = [
      { name: "Anime", description: "Watching and discussing anime series", icon: "🎌", category: "Entertainment" },
      { name: "Biking", description: "Long rides and exploring new trails", icon: "🚴", category: "Sports" },
      { name: "Gaming", description: "PC and console gaming enthusiast", icon: "🎮", category: "Entertainment" },
      { name: "Event Design", description: "Creating memorable experiences", icon: "🎪", category: "Creative" },
      { name: "Photography", description: "Capturing moments and landscapes", icon: "📸", category: "Creative" },
      { name: "Music", description: "Playing guitar and producing beats", icon: "🎸", category: "Arts" },
    ];

    for (const hobby of hobbies) {
      await ctx.db.insert("hobbies", hobby);
    }

    // Add Projects
    const projects = [
      {
        title: "E-Commerce Platform",
        description: "Full-stack online shopping platform with payment integration",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800",
        tools: ["React", "Node.js", "MongoDB", "Stripe"],
        link: "https://example.com",
        github: "https://github.com",
      },
      {
        title: "AI Chat Assistant",
        description: "Intelligent chatbot using natural language processing",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
        tools: ["Python", "TensorFlow", "React", "FastAPI"],
        github: "https://github.com",
      },
      {
        title: "Task Management App",
        description: "Collaborative project management tool with real-time updates",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
        tools: ["React", "Firebase", "TailwindCSS"],
        link: "https://example.com",
      },
      {
        title: "Weather Dashboard",
        description: "Beautiful weather app with forecasts and interactive maps",
        image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800",
        tools: ["React", "OpenWeather API", "Chart.js"],
        link: "https://example.com",
      },
    ];

    for (const project of projects) {
      await ctx.db.insert("projects", project);
    }

    return { success: true, message: "Portfolio data seeded successfully!" };
  },
});
