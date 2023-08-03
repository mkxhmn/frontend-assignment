type HeroProps = {
  title: string;
  subtitle?: string;
};

export const Hero = (props: HeroProps) => {
  return (
    <div className="mx-auto mb-4 max-w-2xl px-6 sm:mt-8 lg:mx-0">
      <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl">
        {props.title}
      </h1>
      {props.subtitle && (
        <p className="font-display mt-4 text-lg tracking-tight text-slate-500 dark:text-slate-400 sm:text-xl">
          {props.subtitle}
        </p>
      )}
    </div>
  );
};
