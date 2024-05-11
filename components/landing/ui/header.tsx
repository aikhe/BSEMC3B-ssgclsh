"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { DM_Sans } from "next/font/google";
import { ArrowDown, Bean, Earth, Gamepad2, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { LandingPages, Links } from "@/lib/nav-data";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const Header = () => {
  const [sidebarOpen, isSidebarOpen] = useState(false);
  const [disableScroll, setDisableScroll] = useState(false);

  const handleToggleSidebar = () => {
    isSidebarOpen(!sidebarOpen);
    setDisableScroll(!disableScroll);

    document.body.style.overflow = !disableScroll ? "hidden" : "auto";
  };

  const pathname = usePathname();
  const isRoot = pathname === "/";

  const linkStyles =
    "text-[.9rem] lg:inline whitespace-nowrap text-slate-200/60 hover:bg-slate-200/20 hover:text-white/80 px-5 py-2 rounded-md";
  const linkStylesSideBar =
    "text-[1.5rem] lg:inline text-slate-200/60 hover:bg-slate-200/20 hover:text-white/80 px-5 py-2 rounded-md";

  return (
    <>
      <header className="fixed z-50 flex h-[4.5rem] w-full items-center bg-[#18181c] px-6 text-white">
        <div
          className={`${dmSans.className} flex w-full items-center justify-between font-medium text-white`}
        >
          {/* MOBILE_NAVIGATION */}

          <div className="mr-8 flex h-5 justify-center gap-2 lg:h-6">
            <Bean />
            <Link
              className="font-valorant whitespace-nowrap text-xl font-normal"
              href="/"
            >
              SAUSAGE CLASH
            </Link>
          </div>

          <button className="lg:hidden" onClick={handleToggleSidebar}>
            <Menu className="size-8" />
          </button>

          {/* END */}

          <div className="mr-[.6rem] hidden h-10 w-[.18rem] bg-white/15 lg:inline"></div>

          <div className="hidden w-full items-center justify-between lg:flex">
            <div className="flex items-center">
              <Link
                href={Links[0].Link}
                className={`whitespace-nowrap rounded-l-md px-5 py-2 text-[.9rem] text-slate-200/60 hover:bg-slate-200/20 hover:text-white/80 lg:inline ${pathname === Links[0].Link ? "bg-slate-200/20 text-white/80" : "hover:rounded-md"}`}
              >
                {Links[0].Text}
              </Link>
              {pathname === "/" && (
                <div className="flex items-center rounded-r-md border-2 border-slate-200/20 px-5 py-[.4rem] text-[.9rem] text-slate-200/60">
                  {LandingPages.map((page, i) => {
                    return (
                      <Link
                        className="mr-5 hover:text-white/80"
                        href={page.Id}
                        key={i}
                      >
                        {page.Text}
                      </Link>
                    );
                  })}
                  <ArrowDown size={15} />
                </div>
              )}
              {Links &&
                Links.slice(1).map((link, i) => {
                  return (
                    <Link
                      className={`${linkStyles} ${pathname === link.Link && "bg-slate-200/20 text-white/80"}`}
                      href={link.Link}
                      key={i}
                    >
                      {link.Text}
                    </Link>
                  );
                })}
            </div>

            <div className="flex items-center gap-4 leading-none">
              <Link href={Links[1].Link}>
                <Earth className="cursor-pointer text-white/60 hover:text-white" />
              </Link>
              <Link
                className="flex items-center gap-2 whitespace-nowrap rounded-md bg-[#ffddb8] px-3 py-1 text-base text-[#18181c] hover:bg-[#ffddb8]/80"
                href={LandingPages[0].Id}
              >
                <Gamepad2 className="size-[1.25rem]" />
                Play now
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* SIDE_BAR */}

      {sidebarOpen && (
        <div
          className={`${dmSans.className} fixed top-0 flex h-full w-full flex-col items-center justify-center gap-4 bg-[#18181c] text-xl text-white`}
        >
          <Link
            onClick={handleToggleSidebar}
            href={Links[0].Link}
            className={linkStylesSideBar}
          >
            {Links[0].Text}
          </Link>
          {isRoot &&
            LandingPages.map((page, i) => {
              return (
                <Link
                  className={`${linkStylesSideBar}`}
                  onClick={handleToggleSidebar}
                  href={page.Id}
                  key={i}
                >
                  {page.Text}
                </Link>
              );
            })}
          {Links &&
            Links.slice(1).map((link, i) => {
              return (
                <Link
                  className={linkStylesSideBar}
                  onClick={handleToggleSidebar}
                  href={link.Link}
                  key={i}
                >
                  {link.Text}
                </Link>
              );
            })}
          <Link onClick={handleToggleSidebar} href={Links[1].Link}>
            <Earth className="text-white/60" />
          </Link>
          <Link
            onClick={handleToggleSidebar}
            className="flex items-center gap-2 rounded-md bg-[#ffddb8] px-3 py-1 text-base text-[#18181c]"
            href={isRoot ? LandingPages[2].Id : Links[0].Link}
          >
            <Gamepad2 className="size-[1.25rem]" />
            Play now
          </Link>
        </div>
      )}

      {/* END */}
    </>
  );
};
