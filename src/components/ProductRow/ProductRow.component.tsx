import { FC } from "react";
import { ProductRowProps } from "./ProductRow.types";
import Image from "next/image";
import { formatPrice } from "@/helpers/formatPrice";
import cx from "classnames";
import { CheckBadgeIcon, TruckIcon } from "@heroicons/react/24/outline";
import { Review } from "../Review";

export const ProductRow: FC<ProductRowProps> = ({ product, onClick }) => (
  <div key={product.id} className="relative hover:bg-gray-100 transition-all duration-300 border border-gray-200 rounded-lg p-3 sm:p-4 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
    {/* Product Image */}
    <div className="flex-shrink-0">
      <Image
        alt={product.title}
        src={product.thumbnail}
        width={120}
        height={120}
        unoptimized
        className="rounded-md bg-white object-contain w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
      />
    </div>

    {/* Product Info */}
    <div className="flex flex-col sm:flex-row flex-1 gap-3 sm:gap-4">
      <div className="flex flex-col gap-2 flex-1 min-w-0">
        <div className="flex items-center gap-1 text-xs sm:text-sm">
          <CheckBadgeIcon className={cx("size-3 sm:size-4", product.condition === "new" ? "stroke-green-500" : "stroke-gray-500")} />
          <p className={cx("text-gray-500", product.condition === "new" ? "text-green-500" : "text-gray-500")}>{product.condition === "new" ? "Nuevo" : "Usado"}</p>
        </div>
        <h2 className="text-gray-700 font-bold text-sm sm:text-base md:text-lg lg:text-xl line-clamp-2">
          {product.title}
        </h2>
        {product.shipping?.free_shipping && (
          <div className="flex items-center gap-1 text-xs sm:text-sm">
            <TruckIcon className="size-3 sm:size-4 stroke-green-500" />
            <p className="text-green-500">Envío gratis</p>
          </div>
        )}
        {product.reviews && (
          <Review rating={product.reviews.rating_average} total={product.reviews.total} />
        )}
      </div>

      {/* Price and Actions */}
      <div className="flex flex-col gap-2 items-start sm:items-center justify-center border-t sm:border-t-0 sm:border-l border-gray-200 pt-3 sm:pt-0 sm:pl-4 w-full sm:w-auto">
        {product.original_price && product.original_price > product.price && (
          <p className="text-sm sm:text-base text-gray-500 line-through">
            {formatPrice(product.original_price, product.currency_id)}
          </p>
        )}
        <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">{formatPrice(product.price, product.currency_id)}</p>
        {product.installments?.quantity && (
          <p className="text-xs sm:text-sm text-green-600 text-center">
            {product.installments.quantity} cuotas de {formatPrice(product.installments.amount, product.currency_id)}
          </p>
        )}
        <button
          onClick={onClick}
          className="w-full sm:w-auto cursor-pointer transition-all duration-300 inline-flex items-center justify-center rounded-md border border-blue-600 bg-blue-600 px-4 sm:px-6 md:px-8 lg:px-12 py-2 sm:py-3 text-xs sm:text-sm font-medium text-white hover:bg-transparent hover:text-blue-800 focus:ring-3 focus:outline-hidden"
        >
          Ver detalles
        </button>
      </div>
    </div>
  </div>
);