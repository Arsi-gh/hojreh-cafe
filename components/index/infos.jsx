import Link from 'next/link'
import React from 'react'
import { GrMapLocation } from "react-icons/gr";
import { BiFoodMenu } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { LuCalendarClock } from "react-icons/lu";
import MenuShowcase from '../menu/menuShowcase';
import { FaInstagram } from "react-icons/fa";

export default function Infos() {
  return (
    <section className="md:space-y-3 space-y-2 text-primary-400 mt-28">
        <Link className="md:p-5 p-4 bg-secondary-500 border border-zinc-300 rounded-xl flex items-center justify-between md:text-2xl text-xl font-semibold relative overflow-hidden btn-behavior" href="/menu">
            <p>مشاهده منو</p>
            <BiFoodMenu  className='md:text-4xl text-2xl'/>
        </Link>
        <MenuShowcase/>
        <a className="md:p-5 p-4 bg-secondary-500 border border-zinc-300 rounded-xl flex items-center justify-between md:text-2xl text-xl font-semibold relative overflow-hidden btn-behavior" href="tel:0312020200">
            <p>تماس با ما</p>
            <FiPhone className='md:text-4xl text-2xl'/>
        </a>
        <a className="md:p-5 p-4 bg-secondary-500 border border-zinc-300 rounded-xl flex items-center justify-between md:text-2xl text-xl font-semibold relative overflow-hidden btn-behavior" href="https://maps.app.goo.gl/Wkgn1baNdKXYnw8j9" target="_blank">
            <p>مسیریابی</p>
            <GrMapLocation className='md:text-4xl text-2xl'/>        
        </a>
        <div className="w-full md:p-5 p-4 bg-secondary-500 border border-zinc-300 rounded-xl md:text-2xl text-xl font-semibold relative overflow-hidden">
            <span className='flex items-center justify-between'>
                <p>ساعات کاری</p>
                <LuCalendarClock className='md:text-4xl text-2xl'/> 
            </span>
            <span className='flex items-center justify-between mt-5 md:text-lg text-base gap-x-3'>
                <p className=''>همه روزه</p>
                <span className='flex-1 h-[1px] bg-zinc-300'></span>
                <p>۶ صبح الی ۱۰ شب</p>
            </span>
        </div>
        <a className="md:p-5 p-4 bg-secondary-500 border border-zinc-300 rounded-xl flex items-center justify-between md:text-2xl text-xl font-semibold relative overflow-hidden btn-behavior" href="https://www.instagram.com/hojreh_cafe/" target="_blank">
            <p>اینستاگرام حجره</p>
            <FaInstagram className='md:text-4xl text-2xl'/>        
        </a>
    </section>
  )
}
