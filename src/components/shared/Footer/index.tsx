import { MenuLink } from "@/components/shared/MenuLink";

type FooterProps = {
  links?: MenuLink[];
};

export const Footer = (props: FooterProps) => {
  return (
    <footer className="max-w-container relative bottom-0 mx-auto mt-32 w-full px-4 sm:px-6 lg:px-8">
      <div className="py-10">
        <p className="mt-5 text-center text-sm leading-6 text-slate-500">
          Where customers become lifelong partners.
        </p>
        {props?.links && (
          <div className="mt-12 flex items-center justify-center">
            <MenuLink links={props.links} />
          </div>
        )}
      </div>
    </footer>
  );
};
