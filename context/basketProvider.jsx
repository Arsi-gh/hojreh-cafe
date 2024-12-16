"use client"
import React, { createContext, useContext, useReducer } from 'react'

const BasketContext = createContext()

const INITIAL_STATE = []

const basketHandler = (state , {type , payload}) => {
    switch (type) {

        case "add" : {
            return [...state , {...payload}]
        }

        case "edit" : {
            let filteredBasket = filterBasket(state , payload.id)
            let editItem = state.find(item => item.id == payload.id)
            let editItemIndex = state.findIndex(item => item.id == payload.id)
            editItem.amount = payload.amount
            editItem.finalPrice = payload.amount * payload.price
            filteredBasket.splice(editItemIndex , 0 , editItem)
            return filteredBasket
        }

        case "delete" : {
            return filterBasket(state , payload.id)
        }

        case "clear" : {
            return []
        }
    }
}

const filterBasket = (state , id) => {
    let filteredBasket = state.filter(item => item.id !== id)
    return filteredBasket
}

export default function BasketProvider({children}) {

  const [basket , dispatch] = useReducer(basketHandler , INITIAL_STATE)  

  return (
    <BasketContext.Provider value={{dispatch , basket}}>
        {children}
    </BasketContext.Provider>
  )
}

export const useBakset = () => {
    return useContext(BasketContext)
}