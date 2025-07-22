export interface ProductPicture {
  id: string;
  url: string;
}

export interface ProductAttribute {
  id: string;
  name: string;
  value_name: string;
}

export interface ProductDescription {
  plain_text: string;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  original_price?: number;
  currency_id: string;
  available_quantity: number;
  sold_quantity: number;
  condition: string;
  permalink: string;
  pictures: ProductPicture[];
  installments: ProductInstallment;
  shipping: ProductShipping;
  seller_address: ProductSellerAddress;
  thumbnail: string;
  attributes: ProductAttribute[];
  warranty: string;
  description: ProductDescription;
  reviews: ProductReviews;
}

export interface ProductInstallment {
  quantity: number;
  amount: number;
  rate: number;
  currency_id: string;
}

export interface ProductShipping {
  free_shipping: boolean;
  mode: string;
  logistic_type: string;
  store_pick_up: boolean;
}

export interface ProductSellerAddress {
  city: {
    name: string;
  };
  state: {
    name: string;
  };
}

export interface ProductReviews {
  rating_average: number;
  total: number;
}