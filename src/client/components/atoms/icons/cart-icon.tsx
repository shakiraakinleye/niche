import cx from "classnames";

export const CartIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cx(className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001"
        // stroke="#1A1A3E"
        strokeWidth="1.7"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.0008 22H15.0008C19.0208 22 19.7408 20.39 19.9508 18.43L20.7008 12.43C20.9708 9.99 20.2708 8 16.0008 8H8.0008C3.7308 8 3.0308 9.99 3.3008 12.43L4.0508 18.43C4.2608 20.39 4.9808 22 9.0008 22Z"
        // stroke="#1A1A3E"
        strokeWidth="1.7"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.4945 12H15.5035"
        // stroke="#1A1A3E"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.49451 12H8.50349"
        // stroke="#1A1A3E"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
