import { Arena } from "@/components/landing/arena";
import { Character } from "@/components/landing/character";
import { Footer } from "@/components/landing/footer";
import { Gameplay } from "@/components/landing/gameplay";
import { Hero } from "@/components/landing/hero";
import { Banner } from "@/components/landing/ui/banner";

export default function Landing() {
  return (
    <div className="max-w-screen overflow-x-hidden">
      <Banner />
      <Hero />
      <Gameplay />
      <Character />
      <Arena />
      <Footer />
    </div>
  );
}
