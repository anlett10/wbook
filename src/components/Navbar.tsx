import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { FC } from "react";
import { clsx } from "clsx";

const NavItem: FC<{ href: string; text: string; router: NextRouter }> = ({
  href,
  text,
  router,
}) => {
  const isActive = router.pathname === (href === "/home" ? "/" : href);

  return (
    <Link href={href === "/home" ? "/" : href}>
      <a
        className={clsx(
          "text-md md:text-lg mr-4 md:mr-6",
          isActive
            ? "text-teal-400 font-semibold"
            : "hover:text-teal-400 transition-colors duration-300"
        )}
      >
        {text}
      </a>
    </Link>
  );
};

const Navbar = () => {
  const router = useRouter();
  const links = ["home", "blog", "FAQ"];

  return (
    <nav className="flex items-center justify-between max-w-sm mx-auto capitalize">
      {links.map((link, index) => (
        <NavItem
          href={`/${link === "FAQ" ? "faq" : link}`}
          text={link}
          router={router}
          key={index}
        />
      ))}
    </nav>
  );
};

export default Navbar;
