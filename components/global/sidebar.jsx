"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { BiFoodMenu } from 'react-icons/bi'
import { HiOutlineHome } from "react-icons/hi";
import { IoCloseOutline } from 'react-icons/io5';

export default function Sidebar({display , displayHandler}) {

  const route = usePathname()  

  return (
    <>
    <div onClick={() => displayHandler(false)} className={`h-screen w-screen fixed top-0 left-0 z-40 bg-black bg-opacity-35 ${display ? 'scale-100' : 'scale-0'}`}></div>
    <div className={`fixed h-screen top-0 right-0 w-52 bg-secondary-500 p-3 py-5 z-50  space-y-3 transition-all duration-300 ${display ? 'mr-0' : '-mr-52'}`}>
        <span className='flex gap-x-3 items-center mb-3'>
            <IoCloseOutline onClick={() => displayHandler(false)} className="text-3xl cursor-pointer"/>
            <b className='text-xl'>حجره</b>
        </span>
        <Link onClick={() => displayHandler(false)} className={`flex items-center justify-between text-lg py-1 ${route == "/" && 'text-teritary-500 text-opacity-90'}`} href="/">
            <b>صفحه اصلی</b>
            <HiOutlineHome className='text-xl'/>
        </Link>
        <Link onClick={() => displayHandler(false)} className={`flex items-center justify-between text-lg py-1 ${route == "/menu" && 'text-teritary-500 text-opacity-90'}`} href="/menu">
            <b>منو</b>
            <BiFoodMenu className='text-xl'/>
        </Link>
    </div>
    </>
  )
}