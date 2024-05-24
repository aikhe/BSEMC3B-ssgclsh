"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DM_Sans } from "next/font/google";
import { ArrowDown, Earth, Gamepad2, Menu, X } from "lucide-react";
import { ImGithub } from "react-icons/im";
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
        className="fixed z-50 flex h-[4.5rem] w-full items-center bg-[#101013] px-4 text-white lg:px-6"
      >
        <div
          className={`${dmSans.className} flex w-full items-center justify-between font-medium text-white`}
        >
          {/* MOBILE_NAVIGATION */}

          <div
            className="flex items-center lg:w-[18.5rem]"
            onClick={sidebarOpen ? handleToggleSidebar : undefined}
          >
            <Link href={isRoot ? "#home" : Links[0].Link}>
              <img
                className="h-16 cursor-pointer"
                src="/images/studio.png"
                // src="/images/logo-mono.png"
                alt=""
              />
            </Link>

            <div className="mx-[.5rem] h-10 w-[.10rem] bg-white/15"></div>

            <Link className="mr-4" href={isRoot ? "#home" : Links[0].Link}>
              <img
                className="h-[2.5rem] cursor-pointer"
                src="/images/logo-mono.png"
                alt=""
              />
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
              <div className={`${isRoot ? "ml-4" : ""}`}>
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
            </div>

            <div className="flex items-center gap-4 leading-none">
              <Link
                href={`https://github.com/ikeandrie/BSEMC3B-SausageClash-Web`}
              >
                <ImGithub
                  className={`${buttonTransition} cursor-pointer text-white/60 hover:text-white`}
                  size={24}
                />
              </Link>
              <Link href={Links[1].Link}>
                <Earth
                  className={`${buttonTransition} cursor-pointer text-white/60 hover:text-white`}
                />
              </Link>
              <Link
                className={`${buttonTransition} group/button flex items-center justify-center
                  gap-2 overflow-hidden whitespace-nowrap rounded-lg bg-[#ffddb8] px-3 py-1
                  text-base text-[#18181c] drop-shadow-xl duration-300
                  hover:bg-[#ffddb8]/80 group-hover/button:text-white
                `}
                href={isRoot ? "#home" : Links[0].Link}
              >
                <div
                  className="absolute -z-[1] flex size-0 items-center justify-center
                  overflow-hidden rounded-e-full rounded-s-full bg-[#ac9180] duration-500
                  ease-in-out group-hover/button:size-32"
                ></div>
                <div className="flex items-center gap-1 duration-500 ease-in-out group-hover/button:text-white ">
                  <Gamepad2 className="size-[1.25rem]" />
                  Play now!
                </div>
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
