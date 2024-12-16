"use client"
import { toPersianNumbers } from "@/utilities/toPersianNumbers";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaRegImage } from "react-icons/fa6";
import { TbSearchOff } from "react-icons/tb";
import ModalLayout from "./modalLayout";
import { menu } from "@/data/menu";
import { useSearch } from "@/context/searchProvider";

export default function SearchModal() {

  const {search : display , setSearch : displayHandler} = useSearch()

  const [filteredItems , setFilteredItems] = useState(null)

  const inputRef = useRef()  

  useEffect(() => {
    setFilteredItems(null)
    inputRef.current.value = ""
    inputRef.current.focus()
  } , [display])  

  const filterHandler = (value) => {
    if (value.length > 2) {
      const newFilteredItems = menu.filter(data => data.name.includes(value))
      setFilteredItems(newFilteredItems)
    } else {
      setFilteredItems(null)
    }
  }

  return (
    <ModalLayout display={display} displayHandler={displayHandler} text="جست و جو">
        <input placeholder="نام محصول" onChange={(e) => filterHandler(e.target.value)} ref={inputRef} className="mt-3 w-full" type="text"/>
        <div className="w-full h-[30rem] overflow-auto rounded-lg  overflow-y-auto flex flex-col gap-3 py-3 max-sm:pr-1">
          {filteredItems == null && <p className="flex gap-2 items-center sm:text-xl flex-wrap justify-center text-center mt-5 text-xl font-semibold">برای جست و جو حداقل 3 کاراکتر وارد کنید<BiSearch className="text-3xl"/></p>}
          {filteredItems && !filteredItems.length && <p className="text-red-500 sm:text-xl flex gap-2 items-center justify-center mt-3">محصولی یافت نشد<TbSearchOff className="text-3xl"/></p>}
          {filteredItems && filteredItems.map((item) => <SearchedItem key={item.id} item={item}/>)}
        </div>
    </ModalLayout>
  )
}

const SearchedItem = ({item}) => {

  const {img , name , desc , price , options} = item

  return (
    <div className="text-lg border border-zinc-300 p-2 rounded-xl cursor-pointer">
    <div className="flex items-center gap-x-6 max-sm:gap-x-3 max-[400px]:gap-x-2">
      {img ? (
        <Image width={500} height={500} className="size-20 rounded-lg object-cover max-sm:size-14" src={img} alt={name} />
        ) : (
          <div className="size-20 min-w-20 rounded-lg grid place-content-center bg-white shadow-xl max-sm:size-14 max-sm:min-w-14"><FaRegImage className='text-neutral-400 text-4xl max-sm:text-2xl'/></div>
        )}
      <div className="w-full">
        <b>{name}</b>
        {desc && <p className="max-w-[20rem]">{desc}</p>}
      </div>
      {price && <b className="text-teritary-500 text-xl">{toPersianNumbers(price)}</b>}
    </div>
    {options && (
        <div className="flex flex-col gap-2 my-2">
          {options.map((opt , index) => <span key={index} className="flex gap-x-3 items-center text-base"><b>{opt.key}</b><span className="flex-1 border-t border-zinc-300 border-dashed"></span><b className="text-teritary-500 text-xl">{toPersianNumbers(opt.value)}</b></span>)}
        </div>
      )}
    </div>
  )
}