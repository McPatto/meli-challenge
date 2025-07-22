import { StarIcon } from "@heroicons/react/20/solid";

export const Review = ({ rating, total }: { rating: number, total: number }) => (
  <div className="flex items-center">
    <p className="text-sm font-medium text-gray-500 mr-2">{rating}</p>
    {[...Array(Math.floor(rating))].map((_, index) => (
      <StarIcon
        key={index}
        aria-hidden="true"
        className="text-yellow-400 size-5 shrink-0"
      />
    ))}
    {rating % 1 !== 0 && (
      <StarIcon
        aria-hidden="true"
        className="text-yellow-400 size-5 shrink-0"
        style={{
          clipPath: `polygon(0 0, ${(rating % 1) * 100}% 0, ${(rating % 1) * 100}% 100%, 0 100%)`
        }}
      />
    )}
    <p className="ml-2 text-sm font-medium text-gray-500">
      ({total})
    </p>
  </div>
);
