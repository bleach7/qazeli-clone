import classNames from "classnames";
import { forwardRef } from "react";
import { IButton } from "./Button.interface";

export const Button = forwardRef<HTMLButtonElement, IButton>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={classNames(
          "inline-block rounded-[25px] bg-[#31BDF8] p-[20px] text-[16px] font-medium leading-[21px] text-white",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
