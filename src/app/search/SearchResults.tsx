import { Pagination, ProductRow } from "@/components";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { SearchResultsProps } from "./SearchResults.types";

export const SearchResults: FC<SearchResultsProps> = ({ productList, pagination, handlePageChange }) => {
  const router = useRouter();

  return (
    <div className="mt-6 gap-2 flex flex-col w-full md:max-w-3/4 items-center">
      {productList.map((product) => (
        <ProductRow key={product.id} product={product} onClick={() => router.push(`/items/${product.id}`)} />
      ))}
      <Pagination {...pagination} onPageChange={handlePageChange} />
    </div>
  );
};
