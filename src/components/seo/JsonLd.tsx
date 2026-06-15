import { profile } from "@/content/profile";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${profile.siteUrl}/#person`,
        name: profile.name,
        jobTitle: profile.tagline,
        email: profile.email,
        url: profile.siteUrl,
        sameAs: [profile.githubUrl, profile.linkedinUrl],
        knowsAbout: [
          "Full Stack Development",
          "Python",
          "Django",
          "FastAPI",
          "Flask",
          "React",
          "Flutter",
          "AWS",
          "Generative AI",
          "Software Engineering",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${profile.siteUrl}/#website`,
        url: profile.siteUrl,
        name: `${profile.name} — ${profile.tagline}`,
        description: profile.heroLead,
        publisher: { "@id": `${profile.siteUrl}/#person` },
        inLanguage: "en",
      },
      {
        "@type": "ProfilePage",
        "@id": `${profile.siteUrl}/#profilepage`,
        url: profile.siteUrl,
        name: profile.name,
        isPartOf: { "@id": `${profile.siteUrl}/#website` },
        about: { "@id": `${profile.siteUrl}/#person` },
        description: profile.about,
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
