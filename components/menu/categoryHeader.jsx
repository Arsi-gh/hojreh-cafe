"use client"
import React from 'react'

const CategoryHeader = ({id , children , text}) => {
    return (
        <div id={`cat-${id}`} className='scroll-tag p-2 flex items-center'>
          <span className='text-3xl text-teritary-500'>{children}</span>
          <h4 className='p-2 text-2xl font-semibold  '>{text}</h4>
      </div>
    )
}

export default CategoryHeader