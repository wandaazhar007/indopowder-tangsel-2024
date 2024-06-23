'use client'
import { createContext, useState } from "react";

export const SearchContext = createContext({});

export function SearchProvider({ children }: any) {
  const [querySearch, setQuerySearch] = useState('');

  const contextValue = {
    setQuerySearch,
    querySearch,
  }
  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchProvider;