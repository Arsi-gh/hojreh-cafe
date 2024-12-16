"use client"
import { useBakset } from "@/context/basketProvider";
import React, { useEffect, useState } from "react";
import { TbTrash } from "react-icons/tb";
import { HiPlus } from "react-icons/hi";
import { HiMinus } from "react-icons/hi";

const ItemQuanitity = ({id , name, desc , price}) => {

  const { dispatch , basket } = useBakset();

  const [amount, setAmount] = useState();

  const deleteItem = (e) => {
    e.stopPropagation();
    dispatch({ type: "delete", payload: { id , name , desc } });
  };
  
  useEffect(() => {
    if (basket.find(item => item.id == id).amount) {
      setAmount(basket.find(item => item.id == id).amount)
      return
    } 
    setAmount(1)
  } , [basket])
  
  useEffect(() => {
    if (amount) {
      dispatch({ type: "edit", payload: {id, amount , price}});
    }
  } , [amount])

  return (
    <span className="flex gap-x-2 items-center self-end">
      <button onClick={() => setAmount((prev) => prev + 1)} className="p-1 rounded-lg border border-primary-500 border-opacity-75 shadow-md" >
        <HiPlus className="text-xl" />
      </button>
      <p className="text-2xl font-bold mx-1">{amount}</p>
      {amount == 1 ? (
        <button onClick={(e) => deleteItem(e)} className="p-1 rounded-lg border shadow-md border-red-500 text-red-500 text-opacity-85" >
          <TbTrash className="text-xl" />
        </button>
      ) : (
        <button onClick={() => setAmount((prev) => prev - 1)} className="p-1 rounded-lg border border-primary-500 border-opacity-75 shadow-md" >
          <HiMinus className="text-xl" />
        </button>
      )}
    </span>
  );
};

export default ItemQuanitity;
