export interface Product {
  id: string;
  title: string;
  price: number;
  currency_id: string;
  condition: string;
  thumbnail: string;
  installments: ProductInstallment;
  shipping: ProductShipping;
  reviews: ProductReviews;
}

export interface ProductInstallment {
  quantity: number;
  amount: number;
}

export interface ProductShipping {
  free_shipping: boolean;
}

export interface ProductReviews {
  rating_average: number;
  total: number;
}