import Image from "next/image";
import { Product } from "@/modelTypes";

export const MainImage = ({ product, selectedImageIndex }: { product: Product, selectedImageIndex: number }) => (
  <div className="flex-1">
    <div className="aspect-square w-full overflow-hidden rounded-lg">
      <Image
        width={64}
        height={64}
        src={product.pictures?.[selectedImageIndex]?.url || product.pictures?.[0]?.url}
        alt={product.title}
        className="h-full w-full object-contain object-center"
        unoptimized
      />
    </div>
  </div>
);
