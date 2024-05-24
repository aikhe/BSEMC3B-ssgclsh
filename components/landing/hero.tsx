import Link from "next/link";
import { ButtonVariants } from "../ui/button-variants";

export const Hero = () => {
  return (
    <>
      <section
        className="clip-path thick:-mb-[7.55rem] thick:min-h-[70rem] thick:pt-[2rem] relative z-[10]
          -mb-[5.7rem] mt-[11.15rem] flex size-10 min-h-[29.5rem] w-full flex-col gap-[7rem]
          bg-white object-cover md:mt-[0rem] md:min-h-[60rem] md:gap-[11rem]"
      >
        <img
          className="absolute h-[105%] w-full -translate-y-[1.5rem] object-cover md:h-[90%] md:translate-y-[6rem]"
          src="/images/hero/hero.png"
          alt=""
        />
        <Link
          href="#gameplay"
          className="thick:mt-[57rem] z-[1] mx-auto mt-[23.5rem] text-white md:mt-[50rem]"
        >
          <ButtonVariants text="DOWNLOAD NOW!" whiteText />
        </Link>
      </section>
      <div className="clip-path thick:h-[8rem] relative z-[9] -mb-[10rem] h-[6rem] w-full bg-white"></div>
    </>
  );
};
