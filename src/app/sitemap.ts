import type { MetadataRoute } from "next";
import { profile } from "@/content/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = profile.siteUrl.replace(/\/$/, "");
  return [
    {
      url: base,
      lastModified: profile.siteContentUpdated,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
