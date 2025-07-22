import { PaginationProps } from "@/components/Pagination/Pagination.types";
import { Product } from "@/modelTypes";

export type SearchResultsProps = {
  productList: Product[];
  pagination: Pick<PaginationProps, "currentPage" | "totalPages" | "itemsPerPage" | "totalItems">;
  handlePageChange: (page: number) => void;
};
