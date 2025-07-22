'use client'

import { FC } from "react";
import { VerticalCarouselProps } from "./VerticalCarousel.types";
import { Arrow } from "./subcomponents/Arrow";
import { MainImage, Thumbnail } from "./subcomponents";

export const VerticalCarousel: FC<VerticalCarouselProps> = ({ product, selectedImageIndex, setSelectedImageIndex }) => {

  const handleImageSelect = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handlePreviousImage = () => {
    if (product && product.pictures) {
      setSelectedImageIndex((prev) => 
        prev === 0 ? product.pictures.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    if (product && product.pictures) {
      setSelectedImageIndex((prev) => 
        prev === product.pictures.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:space-y-4">
      <div className="flex flex-row md:flex-col space-y-2 justify-center items-center md:justify-start order-2 md:order-1">
        <div className="hidden md:block">
          {product.pictures && product.pictures.length > 1 && (
            <Arrow onClick={handlePreviousImage} ariaLabel="Previous image" direction="up" />
          )}      
        </div>
        <div className="flex flex-row md:flex-col gap-2 max-h-80 overflow-y-auto">
          {product.pictures?.map((picture, index) => (
            <Thumbnail key={picture.id} picture={picture} onClick={() => handleImageSelect(index)} altImage={`${product.title} - Image ${index + 1}`} selected={selectedImageIndex === index} />
          ))}
        </div>
        <div className="hidden md:block">
          {product.pictures && product.pictures.length > 1 && (
            <Arrow onClick={handleNextImage} ariaLabel="Next image" direction="down" />
          )}
        </div>
      </div>
      <div className="order-1 md:order-2">
        <MainImage product={product} selectedImageIndex={selectedImageIndex} />
      </div>
    </div>
  );
};
