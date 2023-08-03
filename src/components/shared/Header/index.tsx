import { Button } from "@/components/ui/button";
import { MenuLink } from "@/components/shared/MenuLink";

type HeaderProps = {
  links?: MenuLink[];
};

export const Header = (props: HeaderProps) => {
  return (
    <header className="relative z-50 mx-auto max-w-7xl flex-none text-sm font-semibold leading-6 text-slate-900">
      <nav
        aria-label="header navigation"
        className="max-w-container px-4 sm:px-6 lg:px-8"
      >
        <div className="relative flex items-center justify-between py-4">
          <span className="mr-8 flex cursor-crosshair items-center space-x-2 text-slate-900 ">
            <span className="text-2xl">👋</span>
            <span className="hidden sm:flex">Customer Portal</span>
          </span>
          {props?.links && (
            <div className="ml-auto items-center sm:border-r sm:pr-8">
              <MenuLink disableSeparator links={props.links} />
            </div>
          )}
          <div className="flex items-center pl-8">
            <Button>
              Log Out
              <span aria-hidden="true">→</span>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};
