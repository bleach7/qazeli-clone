import { IBaseButton } from "@/interfaces";
import { ReactNode } from "react";

export interface IButton extends IBaseButton {
  children: ReactNode;
}
