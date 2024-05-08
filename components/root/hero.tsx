import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="-z-10 h-full w-full">
      <div className="test w-full md:h-[40vh] lg:h-[65vh]">
        <img className="" src="/images/Logos(2).png" alt="" />
        <div className="absolute left-1/2 flex h-[10rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center md:top-1/3 lg:top-[40%] lg:h-[15rem] lg:w-[40rem]">
          <span className="text-xl text-white/90">
            A thrilling 3D dodgeball game
          </span>
          <Image src="/images/logo.png" alt="" width={999} height={999} />
          <Link
            className="border-bun bg-wow text-bun flex items-center whitespace-nowrap rounded-3xl border-2 border-dashed px-6 py-3 font-semibold uppercase transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
            href="/about-us"
          >
            Start you Journey{" "}
            <ArrowRight className="ml-1 h-4 w-4 tracking-normal transition-transform duration-150 ease-in-out group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
      {/* <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
    </div> */}
    </section>
  );
}
