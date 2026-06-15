import { NewsTicker } from "@/components/sections/NewsTicker";
import { Hero } from "@/components/sections/Hero";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { AboutSection } from "@/components/sections/AboutSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <NewsTicker />
      <main id="main">
        <Hero />
        <StatsStrip />
        <AboutSection />
        <CapabilitiesSection />
        <ProjectShowcase />
        <ExperienceSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
