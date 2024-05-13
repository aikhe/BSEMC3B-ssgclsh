import { Crown, Gem, Laugh, Swords } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Links, LandingPages } from "@/lib/nav-data";

const icons = [
  {
    Icon: Swords,
    Link: LandingPages[0].Id,
  },
  {
    Icon: Crown,
    Link: LandingPages[2].Id,
  },
  {
    Icon: Gem,
    Link: Links[1].Link,
  },
  {
    Icon: Laugh,
    Link: LandingPages[1].Id,
  },
];

export const Hero = () => {
  return (
    <>
      <div className="absolute top-0 z-30 mt-[4.5rem] flex w-full flex-col items-center justify-center gap-3 bg-gradient-to-r from-[#df6e29] to-[#fc466b] py-[1rem] text-[1.4rem] text-white md:flex-row md:gap-6 md:py-[1.15rem]">
        <h3 className="leading-none">EXPERIENCE NOW!</h3>
        <div className="flex gap-[.7rem]">
          {icons.map((icon, index) => {
            const Icon = icon.Icon;

            return (
              <Link
                href={icon.Link}
                key={index}
                className="flex size-10 cursor-pointer items-center justify-center rounded-[.27rem] bg-white/70 text-[#df6e29] hover:bg-white/100"
              >
                <Icon />
              </Link>
            );
          })}
        </div>
      </div>

      <section className="clip-path relative z-[1] -mb-[4.7rem] mt-[11.15rem] grid size-10 min-h-[30rem] w-full justify-center bg-white object-cover md:mt-[4.5rem] md:min-h-[60rem]">
        <img
          className="absolute h-[120%] w-full -translate-y-[8%] object-cover md:h-full md:-translate-y-0"
          src="https://cdn2.unrealengine.com/key-art-web-test-zoomed-in-2334x1312-7b7413133b76.png"
          alt=""
        />
        <img
          src="/images/sausage-logo.png"
          alt=""
          className="z-[1] size-[18rem] md:mt-[4rem] md:size-[32.5rem]"
        />
        {/* <Image
          className="object-cover"
          src="https://cdn2.unrealengine.com/fg-10-3-evg-keyart-backgroundonly-1920x1080-1920x1080-cf86998087ba.png"
          alt=""
          fill
          style={{
            objectFit: "cover",
            backgroundPosition: "center",
          }}
        /> */}
      </section>
      <div className="clip-path relative -mb-[5rem] h-[5rem] w-full bg-white"></div>
    </>
  );
};
