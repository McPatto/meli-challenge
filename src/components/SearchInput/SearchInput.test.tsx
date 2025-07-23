import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { SearchInput } from './SearchInput.component';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('SearchInput', () => {
  const mockOnSearch = jest.fn();

  beforeEach(() => {
    mockOnSearch.mockClear();
  });

  it('renders with placeholder text', () => {
    render(<SearchInput placeholder="Buscar productos..." onSearch={mockOnSearch} />);
    
    expect(screen.getByPlaceholderText('Buscar productos...')).toBeInTheDocument();
  });

  it('calls onSearch when search button is clicked', async () => {
    render(<SearchInput placeholder="Buscar productos..." onSearch={mockOnSearch} />);
    
    const input = screen.getByPlaceholderText('Buscar productos...');
    const searchButton = screen.getByRole('button', { name: /search/i });
    
    fireEvent.change(input, { target: { value: 'iphone' } });
    
    fireEvent.click(searchButton);
    
    await waitFor(() => {
      expect(mockOnSearch).toHaveBeenCalledWith('iphone');
    });
  });

  it('calls onSearch when Enter key is pressed', async () => {
    render(<SearchInput placeholder="Buscar productos..." onSearch={mockOnSearch} />);
    
    const input = screen.getByPlaceholderText('Buscar productos...');
    
    fireEvent.change(input, { target: { value: 'samsung' } });
    
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    
    await waitFor(() => {
      expect(mockOnSearch).toHaveBeenCalledWith('samsung');
    });
  });

  it('does not call onSearch when input is empty', () => {
    render(<SearchInput placeholder="Buscar productos..." onSearch={mockOnSearch} />);
    
    const searchButton = screen.getByRole('button', { name: /search/i });
    
    expect(searchButton).toBeDisabled();
    
    fireEvent.click(searchButton);
    
    expect(mockOnSearch).not.toHaveBeenCalled();
  });

  it('trims whitespace from search input', async () => {
    render(<SearchInput placeholder="Buscar productos..." onSearch={mockOnSearch} />);
    
    const input = screen.getByPlaceholderText('Buscar productos...');
    const searchButton = screen.getByRole('button', { name: /search/i });
    
    fireEvent.change(input, { target: { value: '  iphone  ' } });
    
    fireEvent.click(searchButton);
    
    await waitFor(() => {
      expect(mockOnSearch).toHaveBeenCalledWith('iphone');
    });
  });

  it('enables search button when input has content', () => {
    render(<SearchInput placeholder="Buscar productos..." onSearch={mockOnSearch} />);
    
    const input = screen.getByPlaceholderText('Buscar productos...');
    const searchButton = screen.getByRole('button', { name: /search/i });
    
    expect(searchButton).toBeDisabled();
    
    fireEvent.change(input, { target: { value: 'test' } });
    
    expect(searchButton).not.toBeDisabled();
  });
}); 