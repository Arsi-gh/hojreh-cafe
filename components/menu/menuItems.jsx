"use client"
import React from 'react'
import Item from './item'
import { menuDatas } from '@/data/menuDatas'
import ItemWrapper from './itemWrapper'

export default function MenuItems() {
  return (
    <main className='sm:mt-12'>
      <ItemWrapper>
          {menuDatas.map((item) => <Item key={item.id} {...item}/>)}
      </ItemWrapper>
    </main>
  )
}
