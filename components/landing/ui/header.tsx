"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DM_Sans } from "next/font/google";
import { Menu } from "lucide-react";
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

  return (
    <>
      <header className="fixed z-50 flex h-20 w-full items-center bg-[#18181c]">
        <div
          className={`${dmSans.className} mx-auto hidden w-fit items-center gap-6 text-xl/4 font-medium text-white lg:flex`}
        >
          <Link href={links[0].Link} className="hover:underline">
            {links[0].Text}
          </Link>
          {isRoot &&
            landingPages.map((page, i) => {
              return (
                <Link
                  className="text-slate-200/50 hover:underline"
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
                <Link className="hover:underline" href={link.Link} key={i}>
                  {link.Text}
                </Link>
              );
            })}
        </div>

        {/* MOBILE_NAVIGATION */}

        <div className="mx-4 flex w-full items-center justify-between text-white lg:hidden">
          <Link href="/">SAUSAGE CLASH</Link>
          <button onClick={handleToggleSidebar}>
            <Menu className="size-8" />
          </button>
        </div>
      </header>

      {sidebarOpen && (
        <div className="fixed top-0 flex h-full w-full flex-col items-center justify-center gap-4 bg-[#18181c] text-xl text-white">
          <Link
            onClick={handleToggleSidebar}
            href={links[0].Link}
            className="hover:underline"
          >
            {links[0].Text}
          </Link>
          {isRoot &&
            landingPages.map((page, i) => {
              return (
                <Link
                  onClick={handleToggleSidebar}
                  className="text-slate-200/50 hover:underline"
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
                  onClick={handleToggleSidebar}
                  className="hover:underline"
                  href={link.Link}
                  key={i}
                >
                  {link.Text}
                </Link>
              );
            })}
        </div>
      )}
    </>
  );
};
