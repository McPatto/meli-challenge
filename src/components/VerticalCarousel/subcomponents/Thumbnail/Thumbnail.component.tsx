import Image from "next/image";
import { FC } from "react";
import { ThumbnailProps } from "./Thumbnail.types";
import cx from "classnames";

export const Thumbnail: FC<ThumbnailProps> = ({ picture, onClick, altImage, className, selected }) => {
  return (
    <button
      key={picture.id}
      onClick={onClick}
      className={cx("w-20 h-20 rounded-lg overflow-hidden border-2 transition-all", className, selected && "border-blue-500 ring-2 ring-blue-200")}
    >
      <Image
        width={80}
        height={80}
        src={picture.url}
        alt={altImage}
        className="w-full h-full object-contain"
      />
    </button>
  );
};
