import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IBaseDiv
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
