import { FC } from "react";
import { ProductListResultProps } from "./ProductListResult.types";
import Image from "next/image";
import { formatPrice } from "@/helpers/formatPrice";
import cx from "classnames";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";

export const ProductListResult: FC<ProductListResultProps> = ({ product, onClick }) => (
  <div key={product.id} className="relative hover:bg-gray-100 transition-all duration-300 border-1 border-gray-200 rounded-lg p-4 flex flex-col gap-4 w-full flex-1 md:flex-row max-w-4xl">
    <Image
      alt={product.title}
      src={product.thumbnail}
      width={100}
      height={100}
      unoptimized
      className="rounded-md bg-white object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80 w-sm"
    />
    <div className="mt-4 flex justify-between w-full">
      <div className="flex flex-col gap-2">
        <h2 className="text-gray-700 font-bold text-xl">
          {product.title}
        </h2>
        <span className="flex items-center gap-1 text-sm">
          <CheckBadgeIcon className={cx("size-4", product.condition === "new" ? "stroke-green-500" : "stroke-gray-500")} />
          <p className={cx("text-gray-500", product.condition === "new" ? "text-green-500" : "text-gray-500")}>{product.condition === "new" ? "Nuevo" : "Usado"}</p>
        </span>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center border-l-1 border-gray-200 pl-4 w-52">
        <p className="text-2xl font-bold text-gray-900">{formatPrice(product.price, product.currency_id)}</p>
        <button
          onClick={onClick}
          className="cursor-pointer transition-all duration-300 inline-block rounded-sm border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-800 focus:ring-3 focus:outline-hidden"
        >
          Comprar
        </button>
      </div>
    </div>
  </div>
);