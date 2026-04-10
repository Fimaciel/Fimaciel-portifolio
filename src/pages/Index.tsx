import { lazy, Suspense } from "react";

import StickerLineArtBackground from "@/components/backgrounds/StickerLineArtBackground";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";

const AboutSection = lazy(() => import("@/components/sections/AboutSection"));
const ProjectsSection = lazy(() => import("@/components/sections/ProjectsSection"));
const SkillsSection = lazy(() => import("@/components/sections/SkillsSection"));
const ExperienceSection = lazy(() => import("@/components/sections/ExperienceSection"));
const EducationSection = lazy(() => import("@/components/sections/EducationSection"));
const ContactSection = lazy(() => import("@/components/sections/ContactSection"));

const SectionFallback = () => <div className="min-h-[60vh]" aria-hidden />;

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <StickerLineArtBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <Suspense fallback={<SectionFallback />}>
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ExperienceSection />
          <EducationSection />
          <ContactSection />
        </Suspense>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
