import { Arena } from "@/components/landing/arena";
import { Character } from "@/components/landing/character";
import { Gameplay } from "@/components/landing/gameplay";
import { Hero } from "@/components/landing/hero";

export default function Landing() {
  return (
    <div className="overflow-x-hidden max-w-screen">
      <Hero />
      <Gameplay />
      <Character />
      <Arena />
    </div>
  );
}
