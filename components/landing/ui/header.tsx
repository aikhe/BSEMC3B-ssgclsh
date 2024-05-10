"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DM_Sans } from "next/font/google";
import { Bean, Earth, Gamepad2, Menu, Sparkles, Tally1 } from "lucide-react";
import { useState } from "react";

const dmSans = DM_Sans({ subsets: ["latin"] });

const links = [
  {
    Link: "/",
    Text: "HOME",
  },
  {
    Link: "/gallery",
    Text: "GALLERY",
  },
  {
    Link: "/frequently-asked-questions",
    Text: "FAQ's",
  },
  {
    Link: "/about-us",
    Text: "ABOUT US",
  },
];

const landingPages = [
  {
    Id: "#gameplay",
    Text: "Gameplay",
  },
  {
    Id: "#character",
    Text: "Character",
  },
  {
    Id: "#arena",
    Text: "Arena",
  },
];

export const Header = () => {
  const pathname = usePathname();

  const [sidebarOpen, isSidebarOpen] = useState(false);
  const [disableScroll, setDisableScroll] = useState(false);

  const handleToggleSidebar = () => {
    isSidebarOpen(!sidebarOpen);
    setDisableScroll(!disableScroll);

    document.body.style.overflow = !disableScroll ? "hidden" : "auto";
  };

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
            <Link className="font-valorant whitespace-nowrap text-xl" href="/">
              SAUSAGE CLASH
            </Link>
          </div>

          <button className="lg:hidden" onClick={handleToggleSidebar}>
            <Menu className="size-8" />
          </button>

          {/* END */}

          <div className="mr-[.6rem] hidden h-10 w-[.18rem] bg-white/15 lg:inline"></div>

          <div className="hidden w-full items-center justify-between lg:flex">
            <div>
              <Link href={links[0].Link} className={linkStyles}>
                {links[0].Text}
              </Link>
              {isRoot &&
                landingPages.map((page, i) => {
                  return (
                    <Link className={`${linkStyles} `} href={page.Id} key={i}>
                      {page.Text}
                    </Link>
                  );
                })}
              {links &&
                links.slice(1).map((link, i) => {
                  return (
                    <Link className={linkStyles} href={link.Link} key={i}>
                      {link.Text}
                    </Link>
                  );
                })}
            </div>
            <div className="flex items-center gap-4 leading-none">
              <Earth className="cursor-pointer text-white/60 hover:text-white" />
              <Link
                className="flex items-center gap-2 whitespace-nowrap rounded-md bg-[#ffddb8] px-3 py-1 text-base text-[#18181c] hover:bg-[#ffddb8]/80"
                href={landingPages[2].Id}
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
            href={links[0].Link}
            className={linkStylesSideBar}
          >
            {links[0].Text}
          </Link>
          {isRoot &&
            landingPages.map((page, i) => {
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
          {links &&
            links.slice(1).map((link, i) => {
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
          <Earth className="text-white/60" />
          <Link
            className="flex items-center gap-2 rounded-md bg-[#ffddb8] px-3 py-1 text-base text-[#18181c]"
            href={landingPages[2].Id}
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
