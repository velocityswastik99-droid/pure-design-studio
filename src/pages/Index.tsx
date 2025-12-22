import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ProductsGrid } from "@/components/ProductsGrid";
import { FeatureSection } from "@/components/FeatureSection";
import { ParallaxSection } from "@/components/ParallaxSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ProductsGrid />
      <FeatureSection />
      <ParallaxSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;