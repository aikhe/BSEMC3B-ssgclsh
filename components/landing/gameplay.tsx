import Link from "next/link";
import { ButtonVariants } from "../ui/button-variants";

export const Gameplay = () => {
  return (
    <>
      <section
        id="gameplay"
        className="clip-path-two thick:h-[60rem] thick:pt-[4.5rem] thick:-mb-[6rem] relative z-[8]
          -mb-[4.7rem] grid h-[52.5rem] w-full items-center
          justify-center bg-slate-600 pt-[8.8rem] lg:h-[52rem] lg:pt-[6rem]"
      >
        <img
          className="absolute h-full w-full object-cover"
          src="/images/background-images/bg3.png"
          alt=""
        />
        <div className="z-[8] flex flex-col gap-14 text-white lg:flex-row">
          <div className="flex w-[31ch] flex-col gap-6 md:w-[50ch] lg:w-[31ch]">
            <h1 className="text-shadow text-4xl">
              FRANTIC, MEATY BATTLES IN A WILD DASH TO VICTORY!
            </h1>
            <Link
              href="#character"
              className="float-start hidden w-fit lg:inline"
            >
              <ButtonVariants text="EXPLORE MORE" whiteText />
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <div
              className="relative h-[12.5rem] w-[23rem] overflow-hidden rounded-xl border-4 border-white
                bg-white/40 drop-shadow-lg md:h-[20rem] md:w-[40rem] lg:h-[30rem] lg:w-[50rem]
                lg:border-[6px]"
            >
              <img
                className="absolute h-full w-full object-cover"
                src="/images/gameplay/gameplay.png"
                alt=""
              />
            </div>
            <h3 className="text-outline ml-2 flex text-3xl text-white before:content-['EXCITING_AND_FUN...'] after:content-['EXCITING_AND_FUN...']">
              EXCITING AND FUN...
            </h3>
          </div>
          <div className="mt-[4rem] w-full md:-mt-8 lg:hidden">
            <Link href="#character" className="relative z-20 float-end">
              <ButtonVariants text="EXPLORE MORE" whiteText />
            </Link>
          </div>
        </div>
      </section>
      <div className="clip-path-two thick:h-[6.5rem] thick:-mb-[6rem] relative z-[7] -mb-[5rem] h-[5rem] w-full bg-white"></div>
    </>
  );
};
