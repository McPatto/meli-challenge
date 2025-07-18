export const formatPrice = (price: number, currency: string) => {
  if (currency === 'ARS') {
    return price.toLocaleString('es-AR', { 
      style: 'currency', 
      currency: 'ARS',
      currencyDisplay: 'symbol'
    }).replace('ARS', '$');
  }

  return price.toLocaleString('es-ES', { 
    style: 'currency', 
    currency,
    currencyDisplay: 'symbol'
  });
};
