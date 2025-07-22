import { Product } from "@/modelTypes";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Review } from "../Review";
import { Button } from "../Button";
import { DescriptionSection, PriceSection, Table } from "./subcomponents";

export const ProductInformation = ({ product }: { product: Product }) => (
  <div className="mt-8 lg:mt-0 lg:pl-8">
    <h3 className="sr-only">Nombre del producto</h3>
    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.title}</h1>
    <div className="mt-4">
      <PriceSection title="Precio" originalPrice={product.original_price} price={product.price} currencyId={product.currency_id} />
    </div>
    <div className="mt-4">
      <Button ariaLabel="Agregar al carrito" onClick={() => {}}>
        <ShoppingCartIcon className="size-4 mr-2" />
        Agregar al carrito
      </Button>
    </div>
    <div className="mt-6">
      <h3 className="sr-only">Reviews del producto</h3>
      <Review rating={product.reviews.rating_average} total={product.reviews.total} />
    </div>
    <div className="mt-8 space-y-6">
      <DescriptionSection description={product.description.plain_text} title="Descripción" srTitle="Descripción del producto" />
      {product.attributes && product.attributes.length > 0 && (
        <DescriptionSection title="Especificaciones" srTitle="Especificaciones del producto">
          <div className="mt-2 overflow-hidden rounded-lg border border-gray-200">
            <Table product={product} />
          </div>  
        </DescriptionSection>
      )}
      {product.warranty && (
        <DescriptionSection description={product.warranty} title="Garantía" srTitle="Garantía del producto" />
      )}
    </div>
  </div>
);