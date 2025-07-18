
import { Hero } from "@/components/Hero";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { Achievements } from "@/components/Achievements";
import { Mission } from "@/components/Mission";

const Index = () => {
  return (
    <div>
      <Hero />
      <Mission />
      <FeaturedProducts />
      <Achievements />
    </div>
  );
};

export default Index;
