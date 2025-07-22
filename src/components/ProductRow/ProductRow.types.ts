import { Product } from "@/modelTypes";

export interface ProductRowProps {
  product: Product;
  onClick: () => void;
}