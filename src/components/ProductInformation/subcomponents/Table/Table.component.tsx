import { Product } from "@/modelTypes";

export const Table = ({ product }: { product: Product }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <tbody className="divide-y divide-gray-200">
        {product.attributes.map((attr, index) => (
          <tr 
            key={attr.id} 
            className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
          >
            <td className="px-4 py-3 text-sm font-medium text-gray-600 border-r border-gray-200">
              {attr.name}
            </td>
            <td className="px-4 py-3 text-sm text-gray-900">
              {attr.value_name}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};
