import type { MetadataRoute } from "next";
import { destinations } from "@/lib/destinations";
import { getAllJournalPosts } from "@/lib/journal";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://keelridge.co";

  const staticPages = [
    { url: base, lastModified: new Date(), priority: 1 },
    { url: `${base}/story`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/destinations`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/impact`, lastModified: new Date(), priority: 0.7 },
    { url: `${base}/journal`, lastModified: new Date(), priority: 0.6 },
  ];

  const destinationPages = destinations.map((d) => ({
    url: `${base}/destinations/${d.slug}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  const journalPages = getAllJournalPosts().map((post) => ({
    url: `${base}/journal/${post.slug}`,
    lastModified: new Date(post.frontmatter.date),
    priority: 0.6,
  }));

  return [...staticPages, ...destinationPages, ...journalPages];
}
