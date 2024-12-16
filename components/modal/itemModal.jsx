"use client"
import { useModal } from "@/context/itemModalProvider";
import { toPersianNumbers } from "@/utilities/toPersianNumbers";
import Image from "next/image";
import { FaRegImage } from "react-icons/fa6";
import ModalLayout from "./modalLayout";


export default function ItemModal({}) {

  const {displayModal : display , setDisplayModal : displayHandler , activeItem : item} = useModal()

  if (item) return (
      <ModalLayout display={display} displayHandler={displayHandler} text={item.name}>
        <ImagePart {...item}/>
        <DescPart {...item}/>
        {item.desc && <p className="text-xl mt-3">{item.desc}</p>}
        {item.options && <OptionsPart options={item.options}/>}
      </ModalLayout>
  );
}

const ImagePart = ({img , name}) => {
  return (
    <div className="relative">
      {img && <Image onLoad={() => setIsLoading(false)} width={500} height={500} alt={name} src={img} className='w-full my-5 rounded-xl object-cover shadow-xl'/>}
      {!img && <div className='my-5 w-full sm:h-[20rem] rounded-xl bg-white flex items-center justify-center shadow-xl'><FaRegImage className='text-zinc-300 text-[10rem] max-sm:text-[9rem] max-sm:h-[18rem]'/></div>}
    </div>
  )
}

const DescPart = ({name , price }) => {
  return (
    <div className="flex justify-between text-xl">
      <b>{name}</b>
      {price && <b className="text-teritary-500 text-2xl">{toPersianNumbers(price)}</b>}
    </div>
  )
}

const OptionsPart = ({options}) => {
  return (
    <div className="flex flex-col gap-2 mt-3">
      {
        options.map((item , index) => {
          return (
            <div key={index} className="flex gap-x-4 items-center text-lg">
              <b>{item.key}</b>
              <span className="flex-1 bg-zinc-300 h-[1px]"></span>
              <b className="text-teritary-500 text-xl">{toPersianNumbers(item.value)}</b>
            </div>
          )
        })
      }
    </div>
  )
}