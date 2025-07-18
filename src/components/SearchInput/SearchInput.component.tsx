import cx from "classnames";
import { SearchInputProps } from "./SearchInput.types";

export const SearchInput = ({
  placeholder,
  className,
  onChange,
  value,
}: SearchInputProps) => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={cx(
          "w-full h-12 px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ease-in-out placeholder-gray-500 text-sm text-gray-500",
          "hover:border-gray-300 focus:outline-none",
          className
        )}
      />
    </div>
  );
};