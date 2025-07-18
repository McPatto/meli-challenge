import { ReactNode } from "react";

export interface HeaderContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export interface HeaderProviderProps {
  children: ReactNode;
}
