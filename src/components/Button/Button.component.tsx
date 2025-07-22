import { FC } from "react";
import { ButtonProps } from "./Button.types";
import cx from "classnames";

export const Button: FC<ButtonProps> = ({ children, onClick, ariaLabel, className }) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={cx("bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer flex items-center justify-center transition-all duration-300 hover:bg-gray-100 hover:text-blue-800 hover:ring-3 focus:ring-3 focus:outline-hidden",
        className)}
    >
      {children}
    </button>
  );
};