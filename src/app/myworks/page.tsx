import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Work",
  robots: { index: false, follow: true },
};

/** Static export (GitHub Pages) cannot use server redirects; use HTML fallback in `out/`. */
export default function MyWorksRedirect() {
  if (process.env.GITHUB_PAGES !== "true") {
    redirect("/#projects");
  }

  return (
    <main id="main" className="container-wide py-24">
      <p className="text-lead">Redirecting to projects…</p>
      <Link href="/#projects" className="btn-primary mt-6 inline-flex">
        View projects
      </Link>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace("/#projects");`,
        }}
      />
    </main>
  );
}
