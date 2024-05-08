"use client";

import Link from "next/link";
import ModeToggle from "../../mode-toggle";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Dot, Menu, MoveUpRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
    <header className="">
      <div className="border-wow z-50 flex h-20 items-center justify-between border-b-2 bg-pop pl-10 pr-10">
        <Link href="/">
          <img className="h-12" src="/images/logo.png" alt="" />
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
        <div className="hidden min-h-[200px] items-center justify-center lg:flex">
          <Link
            href="about-us"
            className="bg-bun flex w-fit items-center gap-1 whitespace-nowrap px-6 py-2 font-medium text-white shadow-[3px_3px_0px_black] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
          >
            About us <MoveUpRight className="size-4" />
          </Link>
        </div>
        <div
          onClick={() => isMobileNavOpen(!mobileNavOpen)}
          className="bg-bun flex w-fit items-center font-medium text-white shadow-[3px_3px_0px_black] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none lg:hidden"
        >
          <Menu className="m-[.5rem]" />
        </div>
      </div>
      {mobileNavOpen && (
        <div className="absolute top-0 -z-10 h-full w-full bg-pop">
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
      )}
      <hr className="bg-bun h-[.25rem] w-full" />
    </header>
  );
}
