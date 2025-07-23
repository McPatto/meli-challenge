import { formatPrice } from './formatPrice';

describe('formatPrice', () => {
  it('formats price with ARS currency correctly', () => {
    const result = formatPrice(1367999, 'ARS');
    expect(result).toContain('$');
    expect(result).toContain('1.367.999');
  });

  it('formats price with decimals correctly', () => {
    const result = formatPrice(113999.92, 'ARS');
    expect(result).toContain('$');
    expect(result).toContain('113.999');
  });

  it('formats zero price correctly', () => {
    const result = formatPrice(0, 'ARS');
    expect(result).toContain('$');
    expect(result).toContain('0');
  });

  it('formats large numbers correctly', () => {
    const result = formatPrice(999999999, 'ARS');
    expect(result).toContain('$');
    expect(result).toContain('999.999.999');
  });

  it('formats small numbers correctly', () => {
    const result = formatPrice(1.5, 'ARS');
    expect(result).toContain('$');
    expect(result).toContain('1');
  });

  it('handles different currencies', () => {
    const usdResult = formatPrice(100, 'USD');
    const eurResult = formatPrice(100, 'EUR');
    expect(usdResult).toContain('100');
    expect(usdResult).toContain('$');
    expect(eurResult).toContain('100');
    expect(eurResult).toContain('€');
  });
}); 