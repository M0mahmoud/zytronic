import { AboutSection, HeroSection, ServicesSection } from "@/components/home";

export default function Home() {
  return (
    <main className='min-h-screen'>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
    </main>
  );
}
