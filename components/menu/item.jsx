import Image from "next/image";
import { FaRegImage } from "react-icons/fa6";
import { useModal } from "@/context/itemModalProvider";
import { TbShoppingCartPlus } from "react-icons/tb";
import { useBakset } from "@/context/basketProvider";
import ItemQuanitity from "./itemQuantity";


export default function Item({item}) {

  const {id , img , name , price , options , desc } = item

  const {setDisplayModal , setActiveItem} = useModal()

  const {dispatch , basket} = useBakset()
  
  const clickHandler = () => {
    setDisplayModal(true)
    setActiveItem(item)
  }

  const addItem = (e , id , desc , price) => {
    e.stopPropagation()
    if (options) {
      dispatch({type : "add" , payload : {id , name , desc , price : +price}})
    } else {
      dispatch({type : "add" , payload : {id , name , price}})
    }
  }

  return (
    <div className="cursor-pointer bg-secondary-400 flex flex-col gap-2 rounded-xl border border-zinc-300 relative p-2 w-full text-sm font-semibold">
      <div className="flex gap-x-2">
        {!img && <div className="rounded-lg size-24 ml-2 bg-white p-3 shadow-lg grid place-content-center"><FaRegImage className="text-5xl text-primary-400 text-opacity-60"/></div>}
        {img && <Image width={500} height={500} className="sm:-mt-10 w-full  object-cover md:rounded-t-3xl rounded-xl size-24 shadow ml-2" src={img} alt={name} />}
        <div className="flex-1 flex justify-between sm:mt-4 mt-2 flex-wrap">
          <b className="md:text-xl text-lg flex-1 text-primary-500">{name}</b>
          {price && <b  className="md:text-2xl text-xl text-teritary-500">{price}<span className="hidden">,۰۰۰</span></b>}
          {desc && <p className="w-full md:text-xl text-base text-justify max-md:w-full text-primary-400 text-opacity-70">{desc}</p>}
        </div>
      </div> 
        {!options && basket.find(item => item.name === name) ? <ItemQuanitity id={item.id} name={name} desc={desc} price={price}/> : !options &&  <button onClick={(e) => addItem(e , id , desc , price)} className="w-fit p-2 rounded-lg shadow-md border flex items-center gap-x-2 self-end"><p>افزودن به سبد خرید</p><TbShoppingCartPlus className="text-xl"/></button>}
        {
          options && (
            <div className="space-y-2 w-full mt-3 text-lg">
              {options.map((opt) => {
                return (
                  <span key={opt.id} className="md:text-xl flex gap-x-3 items-center">
                    <p>{opt.key}</p>
                    <span className="flex-1 border-t border-zinc-300 border-dashed text-2xl"></span>
                    <b className="text-teritary-500">{opt.value}</b>
                    {
                      basket.find(item => item.desc === opt.key && item.name === name) ? 
                      <ItemQuanitity id={id  + opt.id} name={name} desc={opt.key} price={opt.value}/>
                      :<TbShoppingCartPlus onClick={(e) => addItem(e , id + opt.id , opt.key , opt.value)} className="p-2 rounded-lg shadow-lg border text-4xl"/>
                    }
                  </span>
                )
              })}
            </div>
          )
        }
    </div>
  )
}