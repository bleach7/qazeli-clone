import { LinkProps } from "react-router-dom";

export interface ILink extends LinkProps {
  appearance?: "link" | "button" | "form-underline";
}
