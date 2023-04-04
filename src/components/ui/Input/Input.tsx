import { EyeCloseIcon, EyeOpen } from "@/assets/imgs/icons";
import classNames from "classnames";
import { forwardRef, useState } from "react";
import { IInput } from "./Input.interface";

export const Input = forwardRef<HTMLInputElement, IInput>(
  ({ icon: Icon, hidePassword = false, className, ...props }, ref) => {
    const [isHide, setIsHide] = useState(false);

    const toggleHide = () => {
      setIsHide(!isHide);
    };

    if (hidePassword) {
      return (
        <div className={classNames("relative text-[#26333D]", className)}>
          <Icon className="pointer-events-none absolute left-[15px] top-2/4 h-auto w-[20px] -translate-y-2/4" />
          <input
            ref={ref}
            type={isHide ? "text" : "password"}
            className="inline-block w-full rounded-[25px] bg-white px-[43px] py-[17px] text-[14px] font-medium leading-[19px] placeholder:text-[#26333D]"
            {...props}
          />
          <button
            type="button"
            onClick={toggleHide}
            aria-checked={isHide ? "true" : "false"}
            className="absolute right-[15px] top-2/4 inline-block h-[20px] w-[20px] -translate-y-2/4"
          >
            <EyeOpen
              className={classNames(
                "absolute inset-0 h-auto w-full transition-all duration-300 ease-in-out",
                {
                  ["translate-x-2 opacity-0"]: isHide !== false,
                }
              )}
            />
            <EyeCloseIcon
              className={classNames(
                "absolute inset-0 h-auto w-full transition-all duration-300 ease-in-out",
                {
                  ["translate-y-2 opacity-0"]: isHide !== true,
                }
              )}
            />
          </button>
        </div>
      );
    }

    return (
      <div className={classNames("relative text-[#26333D]", className)}>
        <Icon className="absolute left-[15px] top-2/4 h-auto w-[20px] -translate-y-2/4" />
        <input
          ref={ref}
          className="inline-block w-full rounded-[25px] bg-white py-[17px] pl-[43px] pr-[15px] text-[14px] font-medium leading-[19px] placeholder:text-[#26333D]"
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";
