import logoImg from "@/assets/imgs/icons/logo.png";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { ILogo } from "./Logo.interface";

export const Logo = ({ className }: ILogo) => {
  return (
    <Link
      to="/"
      aria-label="Go to home page QAZ ELI"
      className={classNames("inline-block md:h-[50px] md:w-[215px]", className)}
    >
      <img
        src={logoImg}
        width={215}
        height={50}
        alt="QAZ ELI Online Booking"
        className="h-full w-full object-contain"
      />
    </Link>
  );
};
