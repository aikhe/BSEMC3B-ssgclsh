import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="h-full w-full">
      <div className="cutout hidden h-[50vh] w-full md:h-[40vh] lg:block lg:h-[65vh]">
        <img
          className="relative -z-50 hidden md:block"
          src="/images/Logos(2).png"
          alt=""
        />
        <img
          className="relative -z-50 block md:hidden"
          src="/images/logos-mobile.png"
          alt=""
        />
        <div className="absolute left-1/2 top-[23%] -z-10 flex h-[10rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center md:top-1/3 lg:top-[37%] lg:h-[15rem] lg:w-[40rem]">
          <span className="hidden text-xl text-white/90 lg:block">
            A thrilling 3D dodgeball game
          </span>
          <Image src="/images/logo.png" alt="" width={999} height={999} />
          <span className="block text-xl text-white/90 lg:hidden">
            A thrilling 3D dodgeball game
          </span>
          <Link
            className="border-bun bg-wow text-bun mt-[60%] flex items-center whitespace-nowrap rounded-3xl border-2 border-dashed px-6 py-3 font-semibold uppercase transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none lg:mt-0"
            href="/about-us"
          >
            Start your Journey{" "}
            <ArrowRight className="ml-1 h-4 w-4 tracking-normal transition-transform duration-150 ease-in-out group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      <div className="cutout-mobile relative -z-50 h-[50vh] w-full md:h-[40vh] lg:hidden lg:h-[65vh]">
        <img
          className="relative -z-50 block lg:hidden"
          src="/images/logos-mobile.png"
          alt=""
        />
        <div className="absolute left-1/2 top-[25%] -z-20 flex h-[10rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center md:top-1/3 lg:top-[45%] lg:h-[15rem] lg:w-[40rem]">
          <span className="hidden text-xl text-white/90 lg:block">
            A thrilling 3D dodgeball game
          </span>
          <Image src="/images/logo.png" alt="" width={999} height={999} />
          <span className="block text-xl text-white/90 lg:hidden">
            A thrilling 3D dodgeball game
          </span>
          <Link
            className="border-bun bg-wow text-bun mt-[60%] flex items-center whitespace-nowrap rounded-3xl border-2 border-dashed px-6 py-3 font-semibold uppercase transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none lg:mt-0"
            href="/about-us"
          >
            Start your Journey{" "}
            <ArrowRight className="ml-1 h-4 w-4 tracking-normal transition-transform duration-150 ease-in-out group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
