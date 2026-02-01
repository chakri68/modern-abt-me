import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { EducationSection } from "@/components/education-section";
import { ContactSection } from "@/components/contact-section";
import { Navigation } from "@/components/navigation";
import { ScrollIndicator } from "@/components/scroll-indicator";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-background text-foreground snap-y snap-proximity scroll-smooth">
      <Navigation />
      <ScrollIndicator />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
}
