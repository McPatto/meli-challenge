import { formatPrice } from "@/helpers/formatPrice";

export const PriceSection = ({ title, originalPrice, price, currencyId }: { title: string, originalPrice?: number, price: number, currencyId: string }) => (
  <>
    <h3 className="sr-only">{title}</h3>
    {originalPrice && originalPrice > price && <p className="text-md text-gray-500 line-through mt-1">{formatPrice(originalPrice, currencyId)}</p>}
    <p className="text-3xl tracking-tight text-gray-900">{formatPrice(price, currencyId)}</p>
  </>
);
