import React from 'react'
import { IoCloseOutline } from "react-icons/io5";

export default function ModalLayout({displayHandler , text , display , children}) {
  return (
    <>
    <div onClick={() => displayHandler(false)} className={`w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-50 z-50 scale-0 ${display && "scale-100" }`}></div>
    <div className={`w-[30rem] h-fit p-5 bg-secondary-400 z-50 sm:rounded-xl fixed sm:left-1/2 sm:top-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 sm:scale-0 transition-all max-sm:w-full bottom-0 rounded-t-3xl -mb-[60rem] max-sm:p-3 max-sm:py-5 max-sm:pb-8 ${display && 'sm:scale-100 mb-0'}`}>
        <h4 className="flex justify-between items-center pb-3 border-b  border-zinc-300">
          <b className='text-xl'>{text}</b>
          <IoCloseOutline onClick={() => displayHandler(false)} className="text-4xl cursor-pointer"/>
        </h4>
        {children}
    </div>
    </>
  )
}
