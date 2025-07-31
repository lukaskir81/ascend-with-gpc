import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <div id="features">
          <Features />
        </div>
        <div id="benefits">
          <Benefits />
        </div>
        <div id="faq">
          <FAQ />
        </div>
        <div id="cta">
          <CTA />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
