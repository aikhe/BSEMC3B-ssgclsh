import { SocialsIcon } from "@/lib/nav-data";
import Link from "next/link";

export const Socials = () => {
  return (
    <div className="flex gap-3">
      {SocialsIcon.map((icon, index) => {
        const Icon = icon.Icon;

        return (
          <Link href={icon.Link} key={index}>
            <Icon
              size={30}
              className="drop-shadow-md transition-all duration-200 hover:text-white/70"
            />
          </Link>
        );
      })}
    </div>
  );
};
