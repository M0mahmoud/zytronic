import {
  AboutSection,
  HeroSection,
  ServicesSection,
  VideoSection,
} from "@/components/home";

export default function Home() {
  return (
    <main className='min-h-screen'>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <VideoSection />
    </main>
  );
}
