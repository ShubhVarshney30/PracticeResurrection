import Navigation from "@/components/navigation";
import HeroSection from "@/components/heroSection";
import Features from "@/components/sections/features";
import TemplatesShowcase from "@/components/sections/templates-showcase";
import HowItWorks from "@/components/sections/how-it-works";
import TestimonialsSection from "@/components/sections/testimonials";
import CTASection from "@/components/sections/cta-section";
import Footer from "@/components/sections/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <Features />
        <TemplatesShowcase />
        <HowItWorks />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;