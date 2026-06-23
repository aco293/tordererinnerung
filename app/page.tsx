import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import Erkenntnisraeume from "@/components/Erkenntnisraeume";
import BookSection from "@/components/BookSection";
import MediaSection from "@/components/MediaSection";
import ToroeffnerSection from "@/components/ToroeffnerSection";
import AboutSection from "@/components/AboutSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <IntroSection />
        <Erkenntnisraeume />
        <BookSection />
        <MediaSection />
        <ToroeffnerSection />
        <AboutSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
