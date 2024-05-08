import Link from "next/link";
import ModeToggle from "../../mode-toggle";
import Image from "next/image";

const links = [
  {
    Link: "/",
    Text: "Gameplay",
  },
  {
    Link: "/playground/",
    Text: "Character",
  },
  {
    Link: "/playground/rtf-play",
    Text: "Arena",
  },
  {
    Link: "/playground/fm-play",
    Text: "Gallery",
  },
  {
    Link: "/playground/db-play",
    Text: "FAQ",
  },
  {
    Link: "/",
    Text: "About us",
  },
];

export default function Header() {
  return (
    <header className="bg-pop flex items-center justify-between gap-4 pl-5 pr-10">
      <Image
        className=""
        src="/images/logo.png"
        alt=""
        width={150}
        height={150}
      />
      <div className="flex gap-6">
        {links.map((link) => {
          return (
            <Link
              className="text-pop-foreground text-lg font-medium"
              key={link.Text}
              href={link.Link}
            >
              {link.Text}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center gap-6">
        <Link className="text-md text-pop-foreground font-medium" href="/">
          About us
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
}
