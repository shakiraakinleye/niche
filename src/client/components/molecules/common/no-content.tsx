export const NoContent = ({
  text,
  children,
}: {
  text: string;
  children: string | React.ReactNode;
}) => {
  return (
    <div className="mx-auto py-20 lg:py-16">
      <div className="mx-auto flex max-w-xs flex-col items-center gap-4 text-center md:max-w-sm lg:max-w-md lg:gap-6">
        <h2 className="font-display text-sm font-semibold tracking-tight text-dark-100 md:text-base">
          {text}
        </h2>
        <div>
          {typeof children === "string" ? (
            <p className="font-default text-sm leading-5 tracking-wide text-gray-2300 2xl:text-base 2xl:leading-6">
              {children}
            </p>
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  );
};
