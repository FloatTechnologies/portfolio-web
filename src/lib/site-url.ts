const DEFAULT_SITE_URL = "https://omerxhafique.vercel.app";

/** Old Vercel alias; redirects and should not appear in sitemap/canonical metadata. */
const LEGACY_SITE_HOSTS = new Set(["omer-shafique.vercel.app"]);

/**
 * Canonical origin for metadata, sitemap, robots, and JSON-LD.
 * Ignores legacy Vercel env values so production stays correct until Vercel env is updated.
 */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (!raw) return DEFAULT_SITE_URL;

  try {
    const host = new URL(raw).hostname;
    if (LEGACY_SITE_HOSTS.has(host)) return DEFAULT_SITE_URL;
  } catch {
    return DEFAULT_SITE_URL;
  }

  return raw;
}
