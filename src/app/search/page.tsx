"use client";

import { ProductNotFound, ProductRowSkeleton } from "@/components";
import { MOCKED_LIST_DATA } from "@/mocks";
import { Product } from "@/modelTypes";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useSearchParams } from "next/navigation";
import { PaginationProps } from "@/components/Pagination/Pagination.types";
import { SearchResults } from "./SearchResults";

export default function Home() {
  const [productList, setProductList] = useState<Product[]>([]);
  const [pagination, setPagination] = useState<Pick<PaginationProps, "currentPage" | "totalPages" | "itemsPerPage" | "totalItems">>({
    currentPage: 1,
    totalPages: 1,
    itemsPerPage: 3,
    totalItems: 0
  });
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const query = searchParams.get('q');
  const [debouncedSearch] = useDebounce(query, 500);

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

  if (isLoading) {
    return (
      <div className="gap-2 m-4 flex flex-col bg-white flex-1 justify-center items-center">
        {[...Array(3)].map((_, index) => (
          <ProductRowSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (!productList.length) {
    return <ProductNotFound />;
  }

  return (
    <div className="flex flex-col bg-white flex-1">
      <div className="flex flex-col items-center justify-center gap-4 p-4">
        <SearchResults productList={productList} pagination={pagination} handlePageChange={handlePageChange} />
      </div>
    </div>
  );
}
