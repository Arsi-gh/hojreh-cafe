"use client"
import { toPersianNumbers } from '@/utilities/toPersianNumbers';
import React from 'react'
import { FaRegImage } from "react-icons/fa6";

const data = [
    {id : 1 , img : "" , name : "لته" , price : 60},
    {id : 2 , img : "" , name : "آمریکانو" , price : 50},
    {id : 3 , img : "" , name : "چیزکیک" , price : 45},
    {id : 4 , img : "" , name : "کوکی شکلاتی" , price : 15},
    {id : 5 , img : "" , name : "کوک اسپرسو" , price : 70},
]

export default function MenuShowcase() {
  return (
    <div className='py-2'>
        <p className='text-lg font-semibold'>پرفروش ترین های حجره</p>
        <div className='flex md:gap-3 gap-2 py-2 px-1 overflow-auto'>
            {data.map(item => <MenuItem key={item.id} {...item}/>)}
        </div>
    </div>
  )
}

const MenuItem = ({name , img , price}) => {
    return (
        <div className='space-y-2'>
            {
                img 
                ? 
                <img loading="lazy" className='md:min-w-40 md:size-40 min-w-32 size-32 rounded-xl shadow-md object-cover' src={img} alt={name} />
                :
                <div className='md:min-w-40 md:size-40 min-w-32 size-32 rounded-xl shadow-md object-cover bg-white bg-opacity-80 grid place-content-center'><FaRegImage className='text-6xl text-primary-400 text-opacity-50'/></div>
            }
            <b className='flex justify-between items-center text-lg text-primary-400 px-1'>{name}<span className='lg:text-xl'>{toPersianNumbers(price)}</span></b>
        </div>
    )
}