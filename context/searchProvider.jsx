"use client"
import React, { createContext, useContext, useState } from 'react'

const SearchContext = createContext()

export default function SearchProvider({children}) {
 
  const [search , setSearch] = useState(false)

  return (
    <SearchContext.Provider value={{search , setSearch}}>
        {children}
    </SearchContext.Provider>
  )
}

export const useSearch = () => {
    return useContext(SearchContext)
}
