'use client'

import React, { useEffect, useState } from "react";
import { MOCKED_ITEM_DATA } from "@/mocks";
import { Product } from "@/modelTypes";
import { ProductNotFound, VerticalCarousel } from "@/components";
import { useParams } from "next/navigation";
import { ProductInformation, ProductInformationSkeleton } from "@/components/ProductInformation";

export default function ProductPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      const product = MOCKED_ITEM_DATA.find((item) => item.id === id);
      if (product) {
        setProduct(product as unknown as Product);
      }
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [id]);

  if (isLoading) {
    return (
      <div className="m-12 lg:m-24">
        <ProductInformationSkeleton />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="m-12 lg:m-24">
        <ProductNotFound />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pt-16 lg:pb-24">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-8">
        <VerticalCarousel product={product} selectedImageIndex={selectedImageIndex} setSelectedImageIndex={setSelectedImageIndex} />
        <ProductInformation product={product} />
      </div>
    </div>
  );
}