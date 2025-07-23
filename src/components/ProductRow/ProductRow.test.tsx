import { render, screen } from '@testing-library/react';
import { ProductRow } from './ProductRow.component';
import { Product } from '@/modelTypes';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: { src: string; alt: string; [key: string]: unknown }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} {...props} />;
  },
}));

const mockProduct: Product = {
  id: "MLA123456789",
  title: "Apple iPhone 13 (128 GB) - Medianoche",
  price: 1367999,
  original_price: 1567999,
  currency_id: "ARS",
  condition: "new",
  thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_973345-MLA47781591382_102021-F.webp",
  installments: {
    quantity: 12,
    amount: 113999.92,
    rate: 0,
    currency_id: "ARS",
  },
  shipping: {
    free_shipping: true,
    mode: "me2",
    logistic_type: "fulfillment",
    store_pick_up: false,
  },
  reviews: {
    rating_average: 4.9,
    total: 35,
  },
  pictures: [
    {
      id: "1",
      url: "https://http2.mlstatic.com/D_NQ_NP_2X_973345-MLA47781591382_102021-F.webp",
    },
  ],
  available_quantity: 5,
  sold_quantity: 10,
  permalink: "https://www.mercadolibre.com.ar/p/MLA123456789",
  attributes: [
    {
      id: "BRAND",
      name: "Marca",
      value_name: "Apple",
    },
  ],
  warranty: "Garantía del vendedor: 3 meses",
  description: {
    plain_text: "Descripción del producto",
  },
  seller_address: {
    city: {
      name: "CABA",
    },
    state: {
      name: "Buenos Aires",
    },
  },
};

describe('ProductRow', () => {
  const mockOnClick = jest.fn();

  it('renders product title', () => {
    render(<ProductRow product={mockProduct} onClick={mockOnClick} />);
    
    expect(screen.getByText('Apple iPhone 13 (128 GB) - Medianoche')).toBeInTheDocument();
  });

  it('renders product price', () => {
    render(<ProductRow product={mockProduct} onClick={mockOnClick} />);
    
    expect(screen.getByText('$ 1.367.999,00')).toBeInTheDocument();
  });

  it('renders original price when available', () => {
    render(<ProductRow product={mockProduct} onClick={mockOnClick} />);
    
    expect(screen.getByText('$ 1.567.999,00')).toBeInTheDocument();
  });

  it('renders product image with correct alt text', () => {
    render(<ProductRow product={mockProduct} onClick={mockOnClick} />);
    
    const image = screen.getByAltText('Apple iPhone 13 (128 GB) - Medianoche');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockProduct.thumbnail);
  });

  it('renders free shipping indicator when available', () => {
    render(<ProductRow product={mockProduct} onClick={mockOnClick} />);
    
    expect(screen.getByText('Envío gratis')).toBeInTheDocument();
  });

  it('renders installments information when available', () => {
    render(<ProductRow product={mockProduct} onClick={mockOnClick} />);
    
    expect(screen.getByText('12 cuotas de $ 113.999,92')).toBeInTheDocument();
  });

  it('renders reviews when available', () => {
    render(<ProductRow product={mockProduct} onClick={mockOnClick} />);
    
    expect(screen.getByText('(35)')).toBeInTheDocument();
  });

  it('renders condition badge', () => {
    render(<ProductRow product={mockProduct} onClick={mockOnClick} />);
    
    expect(screen.getByText('Nuevo')).toBeInTheDocument();
  });
}); 