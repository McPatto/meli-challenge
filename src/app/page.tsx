"use client";

import { ProductListResult } from "@/components";
import { MOCKED_LIST_DATA } from "@/mocks";
import { Product } from "@/modelTypes";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useRouter } from "next/navigation";
import { useSearch } from "@/contexts/Header/HeaderContext";
import { Pagination } from "@/components/Pagination/Pagination.component";
import { PaginationProps } from "@/components/Pagination/Pagination.types";

export default function Home() {
  const [productList, setProductList] = useState<Product[]>([]);
  const [pagination, setPagination] = useState<Pick<PaginationProps, "currentPage" | "totalPages" | "itemsPerPage" | "totalItems">>({
    currentPage: 1,
    totalPages: 1,
    itemsPerPage: 3,
    totalItems: 0
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { searchTerm } = useSearch();
  const [debouncedSearch] = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (!debouncedSearch) {
      setProductList([]);
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      if (MOCKED_LIST_DATA.query.includes(debouncedSearch)) {
        setProductList(MOCKED_LIST_DATA.results.slice((pagination.itemsPerPage || 10) * (pagination.currentPage - 1), (pagination.itemsPerPage || 10) * pagination.currentPage) as unknown as Product[]);
        setPagination((prev) => ({
          ...prev,
          totalPages: MOCKED_LIST_DATA.paging.total,
          itemsPerPage: MOCKED_LIST_DATA.paging.limit,
          totalItems: MOCKED_LIST_DATA.results.length,
        }));
        setIsLoading(false);
        return;
      }
      setProductList([]);
      setIsLoading(false);
    }, 1000);
  }, [debouncedSearch, pagination.itemsPerPage, pagination.currentPage]);

  const handlePageChange = (page: number) => {
    setPagination((prev) => {
      return {
        ...prev,
        currentPage: page,
      };
    });
  };

  return (
    <div className="flex flex-col bg-white flex-1">
      <div className="flex flex-col items-center justify-center gap-4 p-4">
        {!isLoading && !searchTerm.length && <div className="text-gray-500">Search a product in order to see the best offer for you</div>}
        {isLoading ? <div>Loading...</div> : productList.length > 0 ?
          (<div className="mt-6 gap-2 flex flex-col w-full items-center">
            {productList.map((product) => (
              <ProductListResult key={product.id} product={product} onClick={() => router.push(`/product/${product.id}`)} />
            ))}
            <Pagination {...pagination} onPageChange={handlePageChange} />
          </div>)
        : debouncedSearch !== '' && <div>No products found</div>}
      </div>
    </div>
  );
}
