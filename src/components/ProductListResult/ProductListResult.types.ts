import { Product } from "@/modelTypes";

export interface ProductListResultProps {
  product: Product;
  onClick: () => void;
}