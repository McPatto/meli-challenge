import { ProductPicture } from "@/modelTypes";

export type ThumbnailProps = {
  picture: ProductPicture;
  onClick: () => void;
  altImage: string;
  selected: boolean;
  className?: string;
};
