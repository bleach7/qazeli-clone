import classNames from "classnames";
import { Link as RouterLink } from "react-router-dom";
import { ILink } from "./Link.interface";

export const Link = ({ children, appearance, className, to }: ILink) => {
  if (appearance === "button") {
    return (
      <RouterLink
        to={to}
        className={classNames(
          "inline-block rounded-[25px] bg-[#31BDF8] p-[20px] text-[16px] font-medium leading-[21px] text-white",
          className
        )}
      >
        {children}
      </RouterLink>
    );
  }

  if (appearance === "form-underline") {
    return (
      <RouterLink
        to={to}
        className={classNames(
          "relative inline-block border-b border-dashed border-[#26333D] pb-[7px] text-[14px] font-medium leading-[19px]",
          className
        )}
      >
        {children}
      </RouterLink>
    );
  }

  return (
    <RouterLink to={to} className={className}>
      {children}
    </RouterLink>
  );
};
