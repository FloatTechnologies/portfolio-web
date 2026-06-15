import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { siteDescription } from "@/lib/seo";

function projectUrl(project: (typeof projects)[number]) {
  return (
    project.demoLink ??
    project.githubLink ??
    project.appStoreLink ??
    project.playStoreLink ??
    `${profile.siteUrl}/#projects`
  );
}

export function JsonLd() {
  const base = profile.siteUrl.replace(/\/$/, "");

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${base}/#person`,
        name: profile.name,
        alternateName: profile.introName,
        jobTitle: profile.tagline,
        email: profile.email,
        url: base,
        sameAs: [profile.githubUrl, profile.linkedinUrl],
        knowsAbout: profile.seoKeywords.filter(
          (k) => !k.includes("Muhammad") && !k.includes("Omer"),
        ),
      },
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: base,
        name: `${profile.name} — ${profile.tagline}`,
        description: siteDescription,
        publisher: { "@id": `${base}/#person` },
        inLanguage: "en",
      },
      {
        "@type": "ProfilePage",
        "@id": `${base}/#profilepage`,
        url: base,
        name: profile.name,
        isPartOf: { "@id": `${base}/#website` },
        about: { "@id": `${base}/#person` },
        description: profile.about,
        mainEntity: { "@id": `${base}/#person` },
      },
      {
        "@type": "ItemList",
        "@id": `${base}/#projects`,
        name: "Portfolio projects",
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: project.title,
          url: projectUrl(project),
          description: project.description,
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
