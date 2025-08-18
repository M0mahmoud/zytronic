import {
  AboutSection,
  BlogSection,
  CTA,
  HeroSection,
  OffersSection,
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
      <OffersSection />
      <BlogSection />
      <CTA />
    </main>
  );
}
