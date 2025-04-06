import BeautyBenefits from "@/components/BeautyBenefits";
import BeautyTutorials from "@/components/BeautyTutorials";
import BrandShowcase from "@/components/BrandShowcase";
import HeroBanner from "@/components/HeroBanner";
import InstagramFeed from "@/components/InstagramFeed";
import ProductGrid from "@/components/ProductGrid";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <BeautyBenefits />
      <BrandShowcase />
      <ProductGrid />
      <BeautyTutorials />
      <Testimonials />
      <InstagramFeed />
    </>
  );
}
