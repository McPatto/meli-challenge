"use client";

import cx from "classnames";
import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { SearchInputProps } from "./SearchInput.types";

export const SearchInput = ({
  placeholder,
  className,
  onSearch,
  value: externalValue,
}: SearchInputProps) => {
  const [internalValue, setInternalValue] = useState(externalValue || "");

  const handleSearch = () => {
    if (onSearch && internalValue.trim()) {
      onSearch(internalValue.trim());
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(e.target.value);
  };

  return (
    <div className="relative w-full flex flex-row items-center justify-center">
      <input
        type="text"
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
        value={internalValue}
        onChange={handleInputChange}
        className={cx(
          "w-full h-12 pl-4 pr-12 py-3 border border-gray-200 rounded-l-full focus:inset-ring-2 focus:inset-ring-blue-500 focus:border-blue-500 transition-all duration-200 ease-in-out placeholder-gray-500 text-sm text-gray-500",
          "hover:border-gray-300 focus:outline-none",
          className
        )}
      />
      <button
        onClick={handleSearch}
        disabled={!internalValue.trim()}
        className={cx(
          "cursor-pointer p-2 rounded-r-full transition-all duration-200 h-12 w-12 flex items-center justify-center",
          "bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed",
          "text-white hover:text-white disabled:text-gray-400"
        )}
        aria-label="Search"
      >
        <MagnifyingGlassIcon className="h-5 w-5 relative right-0.5" />
      </button>
    </div>
  );
};