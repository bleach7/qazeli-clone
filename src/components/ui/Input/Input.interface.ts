import { IBaseInput } from "@/interfaces";
import { ElementType, HTMLAttributes } from "react";

export interface IInput extends IBaseInput {
  icon: ElementType<HTMLAttributes<SVGSVGElement>>;
  hidePassword?: boolean;
}
