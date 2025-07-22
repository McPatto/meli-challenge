'use client'

import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  return (
    <div className="flex flex-col bg-white flex-1 justify-center items-center">
      {!query && <div className="text-gray-500">Buscá un producto para descubrir la mejor oferta para vos.</div>}
    </div>
  );
}
