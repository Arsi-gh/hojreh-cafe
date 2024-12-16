"use client"
import { useBakset } from '@/context/basketProvider'
import React, { useEffect, useRef, useState } from 'react'
import { TbShoppingCart } from "react-icons/tb";
import ModalLayout from './modalLayout';
import ItemQuanitity from '../menu/itemQuantity';
import { LuInfo } from "react-icons/lu";

export default function BasketModal() {

    const [displayBasket , setDisplayBasket] = useState(false)

    const [displayReceipt , setDisplayReceipt] = useState(false)

    const { basket } = useBakset()
    
    return (
        <>
            <ModalLayout display={displayBasket} displayHandler={setDisplayBasket} text="سبد خرید">
                {displayReceipt ? <BasketReceipt toggleDisplay={setDisplayReceipt}/> : <BasketList displayBasket={setDisplayBasket} toggleDisplay={setDisplayReceipt}/>}
            </ModalLayout>
            {
                basket.length > 0 &&
                <button onClick={() => setDisplayBasket(true)} className={`flex gap-2 p-3 px-4 text-xl rounded-xl shadow-xl fixed  left-1/2 -translate-x-1/2 bg-teritary-500 text-white font-bold items-center ${displayBasket ? '-bottom-52' : 'bottom-4'}`}><p>مشاهده سبد خرید </p><TbShoppingCart className='text-2xl'/></button>
            }
        </>
    )
    
}

const BasketList = ({toggleDisplay , displayBasket}) => {

    const [ basketPrice , setBasketPrice ] = useState(0)

    const { basket , dispatch } = useBakset()

    const deleteBasket = () => {
        dispatch({type : "clear"})
        displayBasket(false)
    }

    useEffect(() => {
        setBasketPrice(0)
        basket.map((item) => setBasketPrice((prev) => prev + item.finalPrice || item.price))
    } , [basket])
    
    return (
        <>
            <div className='space-y-2 my-4 h-96 overflow-auto'>
                {basket.map((item) => {
                    return (
                        <div key={item.id} className='flex gap-3 items-center'>
                            <b className='text-lg'>{item.name}</b>
                            {item.desc && <p>{item.desc}</p>}
                            <b className='text-xl text-teritary-500'>{item.finalPrice ? item.finalPrice : item.price}</b>
                            <span className='flex-1 border-t border-dotted border-zinc-400'></span>
                            <ItemQuanitity id={item.id} name={item.name} desc={item.desc} price={item.price}/>
                        </div>
                    )
                })}
            </div>
            <p className='text-left'>جمع کل : <b className='text-teritary-500 text-xl'>{basketPrice}</b></p>
            <span className='flex gap-2 mt-3 text-xl font-bold'>
                <button onClick={() => toggleDisplay(true)} className='p-3 rounded-xl shadow-xl bg-teritary-500 text-white w-3/4'>تایید و ادامه</button>
                <button onClick={() => deleteBasket()} className='border border-zinc-300 rounded-xl flex-1'>حذف سبد</button>
            </span>
        </>
    )
}

const BasketReceipt = ({toggleDisplay}) => {

    const { basket } = useBakset()

    const receiptRef = useRef()

    return (
        <div className='space-y-3 text-lg mt-3'>
            <b className='text-xl'><LuInfo className='inline-block ml-2'/>با کپی کردن متن سفارش و نوشتن نام کامل خود و پیامک کردن آن به شماره زیر ، سفارش خود را ثبت کنید</b>
            <hr />
            <span className='flex items-center justify-between'>
                <b className='flex gap-x-2 items-center'>
                    <p>شماره تماس و ارسال : </p>
                    0913569568
                </b>
                <button className='p-2 px-4 rounded-xl bg-teritary-500 text-white font-bold'>کپی شماره</button>
            </span>
            <hr />
            <div ref={receiptRef} className='w-full p-2 rounded-lg border border-zinc-300 shadow-md h-52 overflow-auto font-bold *:inline-block'>
                {basket.map((item) => {
                    return (
                        <>  
                            {item.amount && item.amount > 1 && <p className='inline-block ml-1'>{item.amount} عدد</p>}
                            <p>{item.name}</p>
                            {item.desc && <p className='mr-1'>{item.desc}</p>}
                            <span className='last:hidden mx-2'>+</span>
                        </>
                    )
                })}
            </div>
            <button onClick={() => navigator.clipboard.writeText(receiptRef.current.innerText)} className='w-full text-xl p-3 rounded-xl bg-teritary-500 text-white font-bold'>کپی متن</button>
            <button onClick={() => toggleDisplay(false)} className='w-full font-bold text-xl p-2 border border-zinc-300 rounded-xl mt-3'>بازگشت</button>
        </div>
    )
}