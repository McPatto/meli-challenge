"use client";

import { SearchInput } from "../SearchInput";
import { useSearch } from "@/contexts/Header/HeaderContext";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();
  const { searchTerm, setSearchTerm } = useSearch();

  const handleSearchOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    router.push('/');
    setSearchTerm(e.target.value);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zm14 0a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">MeliSearch</span>
            </div>
          </div>

          {/* Search Input */}
          <div className="flex-1 max-w-2xl mx-8">
            <SearchInput 
              placeholder="Buscar productos..." 
              onChange={handleSearchOnChange}
              value={searchTerm}
            />
          </div>

          {/* Advertising/CTA */}
          <div className="flex items-center">
            <div className="hidden sm:flex items-center space-x-4">
              <span className="text-sm text-gray-600">Publicidad</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};
