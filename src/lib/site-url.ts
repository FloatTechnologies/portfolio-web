export const canonicalSiteUrl = "https://omerxhafique.vercel.app";

/** Hosts that should not be used as canonical (aliases / mirrors). */
const LEGACY_SITE_HOSTS = new Set([
  "omer-shafique.vercel.app",
  "omerxhafique.github.io",
]);

/**
 * Canonical origin for metadata, sitemap, robots, and JSON-LD.
 */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (!raw) return canonicalSiteUrl;

  try {
    const host = new URL(raw).hostname;
    if (LEGACY_SITE_HOSTS.has(host)) return canonicalSiteUrl;
  } catch {
    return canonicalSiteUrl;
  }

  return raw;
}
