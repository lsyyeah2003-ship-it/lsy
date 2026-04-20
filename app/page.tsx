import { AboutSection } from "@/components/about-section";
import { BrandsSection } from "@/components/brands-section";
import { ContactSection } from "@/components/contact-section";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { HeroSection } from "@/components/hero-section";
import { ProjectGrid } from "@/components/project-grid";
import { ServicesSection } from "@/components/services-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { PageTransition } from "@/components/page-transition";

export default function HomePage() {
  return (
    <SmoothScrollProvider>
      <PageTransition>
        <main className="min-h-screen bg-black">
        <SiteHeader />
        <HeroSection />
        <AboutSection />
        <BrandsSection />
        <ServicesSection />
        <ProjectGrid />
        <ExperienceTimeline />
        <ContactSection />
        <SiteFooter />
        </main>
      </PageTransition>
    </SmoothScrollProvider>
  );
}
