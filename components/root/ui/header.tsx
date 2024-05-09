"use client";

import Link from "next/link";
import { Dot, Menu, MoveUpRight } from "lucide-react";
import { useState } from "react";

const links = [
  {
    Link: "/gameplay",
    Text: "GAMEPLAY",
  },
  {
    Link: "/character",
    Text: "CHARACTER",
  },
  {
    Link: "/arena",
    Text: "ARENA",
  },
  {
    Link: "/gallery",
    Text: "GALLERY",
  },
  {
    Link: "/frequently-asked-questions",
    Text: "FAQ's",
  },
];

export default function Header() {
  const [mobileNavOpen, isMobileNavOpen] = useState(false);

  return (
    <header>
      <div className="border-wow z-50 flex h-20 items-center justify-between border-b-2 bg-pop pl-4 pr-4 lg:pl-10 lg:pr-10">
        <Link className="hidden lg:block" href="/">
          <img className="h-10 md:h-12" src="/images/logo.png" alt="" />
        </Link>
        <div className="hidden items-center gap-2 lg:flex">
          {links.map((link) => {
            return (
              <>
                <Link
                  className="text-wow/90 border-bun rounded-xl px-4 py-2 text-xl font-bold tracking-wide transition-all duration-300 hover:bg-white/35 hover:text-white"
                  key={link.Text}
                  href={link.Link}
                >
                  {link.Text}
                </Link>
                <Dot className="text-wow" />
              </>
            );
          })}
        </div>
        <div
          onClick={() => isMobileNavOpen(!mobileNavOpen)}
          className="bg-bun flex w-fit items-center p-1 font-medium text-white shadow-[3px_3px_0px_black] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none lg:hidden"
        >
          <Menu className="m-[.5rem]" />
        </div>
        <div className="flex min-h-[200px] items-center justify-center">
          <Link
            href="about-us"
            className="bg-bun flex w-fit items-center gap-1 whitespace-nowrap px-6 py-3 font-medium text-white shadow-[3px_3px_0px_black] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
          >
            About us <MoveUpRight className="size-4" />
          </Link>
        </div>
      </div>
      {mobileNavOpen && (
        <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center gap-4 bg-pop transition-all duration-1000">
          <button
            onClick={() => isMobileNavOpen(!mobileNavOpen)}
            className="bg-bun absolute left-4 top-[.95rem] flex w-fit items-center p-1 font-medium text-white shadow-[3px_3px_0px_black] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none lg:hidden"
          >
            <Menu className="m-[.5rem]" />
          </button>
          <Link
            onClick={() => isMobileNavOpen(!mobileNavOpen)}
            href="/"
            className="text-wow/90 border-bun z-50 rounded-xl px-4 py-2 text-2xl font-bold tracking-wide underline underline-offset-8 transition-all duration-300 hover:bg-white/35 hover:text-white"
          >
            HOMEPAGE
          </Link>
          {links.map((link) => {
            return (
              <>
                <Link
                  onClick={() => isMobileNavOpen(!mobileNavOpen)}
                  className="text-wow/90 border-bun z-50 rounded-xl px-4 py-2 text-2xl font-bold tracking-wide underline underline-offset-8 transition-all duration-300 hover:bg-white/35 hover:text-white"
                  key={link.Text}
                  href={link.Link}
                >
                  {link.Text}
                </Link>
              </>
            );
          })}
        </div>
      )}
      <hr className="bg-bun h-[.25rem] w-full" />
    </header>
  );
}
