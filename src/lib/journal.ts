import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export interface JournalFrontmatter {
  title: string;
  date: string;
  location: string;
  excerpt: string;
  hero?: string;
  heroAlt?: string;
  draft?: boolean;
}

export interface JournalPost {
  slug: string;
  frontmatter: JournalFrontmatter;
  content: string;
}

const JOURNAL_DIR = path.join(process.cwd(), "src", "content", "journal");

function readJournalDir(): string[] {
  if (!fs.existsSync(JOURNAL_DIR)) return [];
  return fs
    .readdirSync(JOURNAL_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
}

function fileToSlug(filename: string): string {
  return filename.replace(/\.mdx?$/, "");
}

function loadFile(filename: string): JournalPost | null {
  const filePath = path.join(JOURNAL_DIR, filename);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const fm = data as Partial<JournalFrontmatter>;

  if (!fm.title || !fm.date || !fm.location || !fm.excerpt) return null;
  if (fm.draft) return null;

  return {
    slug: fileToSlug(filename),
    frontmatter: {
      title: fm.title,
      date: fm.date,
      location: fm.location,
      excerpt: fm.excerpt,
      hero: fm.hero,
      heroAlt: fm.heroAlt,
    },
    content,
  };
}

export function getAllJournalSlugs(): string[] {
  return readJournalDir()
    .map(loadFile)
    .filter((p): p is JournalPost => p !== null)
    .map((p) => p.slug);
}

export function getJournalPost(slug: string): JournalPost | null {
  const filename = readJournalDir().find((f) => fileToSlug(f) === slug);
  if (!filename) return null;
  return loadFile(filename);
}

export function getAllJournalPosts(): JournalPost[] {
  return readJournalDir()
    .map(loadFile)
    .filter((p): p is JournalPost => p !== null)
    .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
}

export function formatJournalDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
