import {
  AboutSection,
  BlogSection,
  CTA,
  HeroSection,
  OffersSection,
  ServicesSection,
  VideoSection,
  RoomsCarousel,
} from "@/components/home";

export default function Home() {
  return (
    <main className='min-h-screen'>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <RoomsCarousel />
      <VideoSection />
      <OffersSection />
      <BlogSection />
      <CTA />
    </main>
  );
}
