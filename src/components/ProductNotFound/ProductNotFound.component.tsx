import Image from "next/image";
import Link from "next/link";

export const ProductNotFound = () => (
  <div className="flex flex-col items-center justify-center py-20">
    <Image
      src="https://static.vecteezy.com/system/resources/previews/008/255/803/non_2x/page-not-found-error-404-system-updates-uploading-computing-operation-installation-programs-system-maintenance-a-hand-drawn-layout-template-of-a-broken-robot-illustration-vector.jpg"
      alt="Producto no encontrado"
      width={400}
      height={200}
      className="mb-6 opacity-60"
    />
    <h2 className="text-2xl font-bold text-gray-700 mb-2">Producto no encontrado</h2>
    <p className="text-gray-500 mb-6 text-center max-w-md">
      Lo sentimos, no pudimos encontrar el producto que buscás.<br />
      Verificá el ID o intentá buscar otro artículo.
    </p>
    <Link
      href="/"
      className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
    >
      Volver al inicio
    </Link>
  </div>
);
