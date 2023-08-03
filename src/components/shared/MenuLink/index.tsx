import Link from "next/link";
import { UrlObject } from "url";

export type MenuLink = {
  label: string;
  href: string | UrlObject;
};

type MenuLinkProps = {
  links: MenuLink[];
  disableSeparator?: boolean;
};

export const MenuLink = (props: MenuLinkProps) => {
  return (
    <nav className="space-x-4">
      {props.links.map((link) => (
        <Link
          className={`${
            props.disableSeparator ? "border-r-0" : "border-r"
          } border-slate-900/15 pr-4 text-sm font-semibold leading-6 text-slate-700 last-of-type:border-0 hover:text-blue-500`}
          key={link.label}
          href={link.href}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};
