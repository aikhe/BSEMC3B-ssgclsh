"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DM_Sans } from "next/font/google";
import { ArrowDown, Bean, Earth, Gamepad2, Menu, X } from "lucide-react";
import { useState } from "react";
import { LandingPages, Links } from "@/lib/nav-data";
import { Sidebar } from "./sidebar";

const dmSans = DM_Sans({ subsets: ["latin"] });

const linkStyles = `text-[.9rem] lg:inline whitespace-nowrap text-slate-200/70
  hover:bg-slate-200/20 hover:text-white/80 px-5 py-[.3rem] rounded-lg`;

const buttonTransition = "transition-all duration-200";

export const Header = () => {
  const [sidebarOpen, isSidebarOpen] = useState(false);
  const [disableScroll, setDisableScroll] = useState(false);

  const handleToggleSidebar = () => {
    isSidebarOpen(!sidebarOpen);
    setDisableScroll(!disableScroll);

    document.body.style.overflow = !disableScroll ? "hidden" : "auto";
  };

  const pathName = usePathname();
  const isRoot = pathName === "/";

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <header
        id="home"
        className="fixed z-50 flex h-[4.5rem] w-full items-center bg-[#101013] px-6 text-white"
      >
        <div
          className={`${dmSans.className} flex w-full items-center justify-between font-medium text-white`}
        >
          {/* MOBILE_NAVIGATION */}

          <div
            onClick={sidebarOpen ? handleToggleSidebar : undefined}
            className="mr-8 flex h-5 justify-center gap-2 lg:h-6"
          >
            <Bean />
            <Link
              className="font-valorant whitespace-nowrap text-xl font-normal"
              href={isRoot ? "#home" : Links[0].Link}
            >
              SAUSAGE CLASH
            </Link>
          </div>

          <button className="lg:hidden" onClick={handleToggleSidebar}>
            {sidebarOpen ? (
              <X className="size-8" />
            ) : (
              <Menu className="size-8" />
            )}
          </button>

          {/* END */}

          <div className="mr-[.6rem] hidden h-10 w-[.18rem] bg-white/15 lg:inline"></div>

          <div className="hidden w-full items-center justify-between lg:flex">
            <div className="flex items-center">
              <Link
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                href={isRoot ? "#home" : Links[0].Link}
                className={`${buttonTransition}
                  whitespace-nowrap px-5 py-[.3rem] text-[.9rem] text-slate-200/70
                  hover:bg-slate-200/20 hover:text-white/80 lg:inline 
                  ${isHovered && pathName === Links[0].Link ? "hover:rounded-l-lg" : "hover:rounded-lg"}
                  ${isHovered ? "bg-none" : pathName === Links[0].Link && "rounded-l-lg bg-slate-200/20 text-white/80 hover:rounded-l-md"}
                `}
              >
                {Links[0].Text}
              </Link>
              {isRoot && (
                <div
                  className="flex items-center rounded-r-md border-2 border-slate-200/20
                    px-5 py-[.2rem] text-[.9rem] text-slate-200/60"
                >
                  {LandingPages.map((page, i) => {
                    return (
                      <Link
                        className={`${buttonTransition} mr-5 hover:text-white/90`}
                        href={page.Id}
                        key={i}
                      >
                        {page.Text}
                      </Link>
                    );
                  })}
                  <Link
                    href="#footer"
                    className={`${buttonTransition} hover:text-white/90`}
                  >
                    <ArrowDown size={15} />
                  </Link>
                </div>
              )}
              {Links &&
                Links.slice(1).map((link, i) => {
                  return (
                    <Link
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      className={`${linkStyles} ${buttonTransition} ${isHovered ? "bg-none" : pathName === link.Link && "bg-slate-200/20 text-white/80"}`}
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
                <Earth
                  className={`${buttonTransition} cursor-pointer text-white/60 hover:text-white`}
                />
              </Link>
              <Link
                className={`${buttonTransition} flex items-center gap-2 whitespace-nowrap
                  rounded-lg bg-[#ffddb8] px-3 py-1 text-base text-[#18181c]
                  hover:bg-[#ffddb8]/80
                `}
                href={isRoot ? LandingPages[2].Id : Links[0].Link}
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
        <Sidebar
          handleClick={handleToggleSidebar}
          isRoot={isRoot}
          pathName={pathName}
          buttonTransition={buttonTransition}
        />
      )}

      {/* END */}
    </>
  );
};
