import { FC } from "react";
import { BUTTON_ACTIVE_CLASSES, BUTTON_DEFAULT_CLASSES } from "../constants";
import { PageButtonProps } from "./PageButton.types";

export const PageButton: FC<PageButtonProps> = ({ page, isActive, onClick, className }) => (
  <button
    onClick={onClick}
    aria-current={isActive ? "page" : undefined}
    className={`${isActive ? BUTTON_ACTIVE_CLASSES : BUTTON_DEFAULT_CLASSES} ${className || ''}`}
  >
    {page}
  </button>
);
