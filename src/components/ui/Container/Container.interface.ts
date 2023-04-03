import { IBaseDiv } from "@/interfaces";
import { ReactNode } from "react";

export interface IContainer extends IBaseDiv {
  children: ReactNode;
}
