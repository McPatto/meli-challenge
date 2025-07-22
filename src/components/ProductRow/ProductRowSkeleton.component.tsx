export const ProductRowSkeleton = () => (
  <div className="relative hover:bg-gray-100 transition-all duration-300 border-1 border-gray-200 rounded-lg p-4 flex flex-col gap-4 w-full flex-1 md:flex-row max-w-4xl overflow-hidden">
    <div className="w-24 h-24 bg-gray-200 rounded-md animate-pulse" />
    <div className="mt-4 flex justify-between w-full">
      <div className="flex flex-col gap-2 flex-1">
        <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4" />
        <div className="h-4 bg-gray-200 rounded animate-pulse w-1/4" />
      </div>
      <div className="flex flex-col gap-2 items-center justify-center border-l-1 border-gray-200 pl-4 w-52">
        <div className="h-8 bg-gray-200 rounded animate-pulse w-24" />
        <div className="h-10 bg-gray-200 rounded animate-pulse w-20" />
      </div>
    </div>
    <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
  </div>
);