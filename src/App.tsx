import { MusicButton } from "./components/MusicButton";
import { HeroSection } from "./sections/HeroSection";
import { MarqueeSection } from "./sections/MarqueeSection";
import { AboutSection } from "./sections/AboutSection";
import { ServicesSection } from "./sections/ServicesSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ContactSection } from "./sections/ContactSection";

export default function App() {
  return (
    <div className="mx-auto min-h-screen w-full min-w-0 overflow-x-clip bg-[#0C0C0C] text-[#D7E2EA]">
      <MusicButton className="fixed right-6 top-16 z-50 sm:right-8 sm:top-20 md:top-24" />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
