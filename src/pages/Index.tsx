import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import InfoSection from "@/components/sections/InfoSection";
import AdvantagesSection from "@/components/sections/AdvantagesSection";
import StepsSection from "@/components/sections/StepsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <InfoSection />
      <AdvantagesSection />
      <StepsSection />
      <FeaturesSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
