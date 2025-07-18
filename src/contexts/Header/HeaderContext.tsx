"use client";

import React, { createContext, useContext, useState } from 'react';
import { HeaderContextType, HeaderProviderProps } from './HeaderContext.types';

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export const useSearch = () => {
  const context = useContext(HeaderContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a HeaderProvider');
  }
  return context;
};

export const HeaderProvider: React.FC<HeaderProviderProps> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <HeaderContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </HeaderContext.Provider>
  );
}; 