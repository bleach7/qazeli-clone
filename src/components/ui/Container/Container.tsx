import classNames from "classnames";
import { IContainer } from "./Container.interface";

export const Container = ({ children, className, ...props }: IContainer) => {
  return (
    <div
      className={classNames("container 3xl:max-w-[1590px]", className)}
      {...props}
    >
      {children}
    </div>
  );
};
