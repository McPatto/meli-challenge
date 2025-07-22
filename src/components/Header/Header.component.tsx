"use client";

import { SearchInput } from "../SearchInput";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();

  const handleSearch = (value: string) => {
    router.push(`/search?q=${value}`);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <section className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-2 sm:gap-4 lg:gap-6">
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="MercadoLiebre"
                width={160}
                height={64}
                className="w-20 sm:w-24 md:w-32 lg:w-40 h-auto object-contain"
              />
            </Link>
          </div>
          <div className="flex-1 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-2 sm:mx-4 lg:mx-8">
            <SearchInput 
              placeholder="Buscar productos..." 
              onSearch={handleSearch}
            />
          </div>
          <div className="flex items-center flex-shrink-0">
            <div className="hidden sm:flex items-center space-x-2 lg:space-x-4">
              <Image
                src="https://www.stickylife.com/media/catalog/product/cache/cae11d3eb59b15e233305252c507fc33/o/v/oval-car-magnet-front_19.png"
                alt="Graphic design"
                width={80}
                height={80}
                className="w-8 sm:w-12 md:w-16 lg:w-20 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};
