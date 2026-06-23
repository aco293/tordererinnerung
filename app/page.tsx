import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import RealmsSection from "@/components/home/RealmsSection";
import BookSection from "@/components/home/BookSection";
import MediaSection from "@/components/home/MediaSection";
import GateOpenersSection from "@/components/home/GateOpenersSection";
import AboutSection from "@/components/home/AboutSection";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <RealmsSection />
        <BookSection />
        <MediaSection />
        <GateOpenersSection />
        <AboutSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
