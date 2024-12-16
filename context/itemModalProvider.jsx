"use client"
import { createContext, useContext, useState } from "react"

const ItemContext = createContext()

export default function ItemModalProvider ({children}) {

    const [activeItem , setActiveItem] = useState(null)
    const [displayModal , setDisplayModal] = useState(false)

    return (
        <ItemContext.Provider value={{activeItem, setActiveItem, displayModal , setDisplayModal}}>
            {children}
        </ItemContext.Provider>
    )
}

export const useModal = () => {
    return useContext(ItemContext)
}