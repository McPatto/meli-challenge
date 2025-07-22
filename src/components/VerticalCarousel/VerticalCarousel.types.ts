import { Dispatch, SetStateAction } from "react";
import { Product } from "@/modelTypes";

export type VerticalCarouselProps = {
  product: Product;
  selectedImageIndex: number;
  setSelectedImageIndex: Dispatch<SetStateAction<number>>;
};
