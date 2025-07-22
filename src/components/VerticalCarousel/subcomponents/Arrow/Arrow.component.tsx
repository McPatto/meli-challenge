import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

export const Arrow = ({ onClick, ariaLabel, direction }: { onClick: () => void, ariaLabel: string, direction: "up" | "down" }) => {
  const Icon = direction === "up" ? ChevronUpIcon : ChevronDownIcon;

  return (
    <button
      onClick={onClick}
      className="flex justify-center p-1 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
      aria-label={ariaLabel}
    >
      <Icon className="h-5 w-5" />
    </button>
  );
};
