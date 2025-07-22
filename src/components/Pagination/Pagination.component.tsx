import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { FC } from 'react'
import { PaginationProps } from './Pagination.types'
import { PageButton } from './subcomponents/PageButton.component';
import { BUTTON_MOBILE_CLASSES, BUTTON_NAV_CLASSES } from './constants';

const VISIBLE_PAGES = 5;

const getVisiblePages = (currentPage: number, totalPages: number): number[] => {
  const halfVisible = Math.floor(VISIBLE_PAGES / 2);
  let start = Math.max(1, currentPage - halfVisible);
  const end = Math.min(totalPages, start + VISIBLE_PAGES - 1);
  
  if (end - start + 1 < VISIBLE_PAGES) {
    start = Math.max(1, end - VISIBLE_PAGES + 1);
  }
  
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};

const NavigationButton: FC<{
  direction: 'prev' | 'next';
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}> = ({ direction, onClick, disabled, className }) => {
  const Icon = direction === 'prev' ? ChevronLeftIcon : ChevronRightIcon;
  const label = direction === 'prev' ? 'Anterior' : 'Siguiente';
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${BUTTON_NAV_CLASSES} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className || ''}`}
    >
      <span className="sr-only">{label}</span>
      <Icon aria-hidden="true" className="size-5" />
    </button>
  );
};

export const Pagination: FC<PaginationProps> = ({ 
  currentPage, 
  totalPages, 
  onPageChange, 
  itemsPerPage = 10,
  totalItems = 0 
}) => {
  const visiblePages = getVisiblePages(currentPage, totalPages);
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);
  
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const handlePrevPage = () => handlePageChange(currentPage - 1);
  const handleNextPage = () => handlePageChange(currentPage + 1);

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 w-full">
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`${BUTTON_MOBILE_CLASSES} ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Anterior
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`${BUTTON_MOBILE_CLASSES} ml-3 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Siguiente
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Mostrando <span className="font-medium">{startItem}</span> a{' '}
            <span className="font-medium">{endItem}</span> de{' '}
            <span className="font-medium">{totalItems}</span> resultados
          </p>
        </div>
        
        <div>
          <nav aria-label="Paginación" className="isolate inline-flex -space-x-px rounded-md shadow-xs gap-1">
            <NavigationButton
              direction="prev"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="rounded-l-md"
            />
            
            {visiblePages.map((page) => (
              <PageButton
                key={page}
                page={page}
                isActive={page === currentPage}
                onClick={() => handlePageChange(page)}
                className={page === visiblePages[0] ? '' : ''}
              />
            ))}
            
            {visiblePages[visiblePages.length - 1] < totalPages && (
              <>
                {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
                  <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 ring-inset focus:outline-offset-0">
                    ...
                  </span>
                )}
                <PageButton
                  page={totalPages}
                  isActive={false}
                  onClick={() => handlePageChange(totalPages)}
                />
              </>
            )}
            
            <NavigationButton
              direction="next"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="rounded-r-md"
            />
          </nav>
        </div>
      </div>
    </div>
  );
};
