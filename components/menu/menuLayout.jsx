"use client"
import React from 'react'
import CategoryHeader from './categoryHeader'
import { GiCoffeePot } from "react-icons/gi";
import { RiCupLine } from "react-icons/ri";
import { RiDrinks2Line } from "react-icons/ri";
import { BiCoffeeTogo } from "react-icons/bi";
import { BsCupStraw } from "react-icons/bs";
import { LuGlassWater } from "react-icons/lu";
import { LiaCoffeeSolid } from "react-icons/lia";
import { LuCupSoda } from "react-icons/lu";
import { TbCup } from "react-icons/tb";
import { LuCakeSlice } from "react-icons/lu";
import { LiaCookieBiteSolid } from "react-icons/lia";
import { RiBreadLine } from "react-icons/ri";
import Item from './item';
import MenuWrapper from './menuWrapper';
import { menu } from '@/data/menu';

export default function MenuLayout() {

  return (
    <>
      <MenuWrapper>
        <CategoryHeader id="dami" text="قهوه دمی" > <GiCoffeePot/> </CategoryHeader>
        {menu.filter(item => item.category === 0).map(item => <Item key={item.id} item={item}/>)}
      </MenuWrapper>
      
      <MenuWrapper>
        <CategoryHeader id="espresoo" text="اسپرسو" > <RiCupLine/> </CategoryHeader>
        {menu.filter(item => item.category === 1).map(item => <Item key={item.id} item={item}/>)}
      </MenuWrapper>
      
      <MenuWrapper>
        <CategoryHeader id="basedEspresso" text="بر پایه اسپرسو" > <RiDrinks2Line/> </CategoryHeader>
        {menu.filter(item => item.category === 2).map(item => <Item key={item.id} item={item}/>)}
      </MenuWrapper>
      
      <MenuWrapper>
        <CategoryHeader id="milkEspresso" text="شیر و اسپرسو" > <BiCoffeeTogo/> </CategoryHeader>
        {menu.filter(item => item.category === 3).map(item => <Item key={item.id} item={item}/>)}
      </MenuWrapper>
      
      <MenuWrapper>
        <CategoryHeader id="basedMilk" text="بر پایه شیر" > <TbCup/> </CategoryHeader>
        {menu.filter(item => item.category === 4).map(item => <Item key={item.id} item={item}/>)}
      </MenuWrapper>
      
      <MenuWrapper>
        <CategoryHeader id="sharbat" text="شربت ها" > <BsCupStraw/> </CategoryHeader>
        {menu.filter(item => item.category === 6).map(item => <Item key={item.id} item={item}/>)}
      </MenuWrapper>
      
      <MenuWrapper>
        <CategoryHeader id="gasdar" text="گازدار" > <LuCupSoda/> </CategoryHeader>
        {menu.filter(item => item.category === 7).map(item => <Item key={item.id} item={item}/>)}
      </MenuWrapper>
      
      <MenuWrapper>
        <CategoryHeader id="damnoosh" text="دمنوش" > <LiaCoffeeSolid/> </CategoryHeader>
        {menu.filter(item => item.category === 8).map(item => <Item key={item.id} item={item}/>)}
      </MenuWrapper>
      
      <MenuWrapper>
        <CategoryHeader id="cake" text="کیک و شیرینی" > <LuCakeSlice/> </CategoryHeader>
        {menu.filter(item => item.category === 9).map(item => <Item key={item.id} item={item}/>)}
      </MenuWrapper>
      
      <MenuWrapper>
        <CategoryHeader id="cookie" text="کوکی" > <LiaCookieBiteSolid/> </CategoryHeader>
        {menu.filter(item => item.category === 10).map(item => <Item key={item.id} item={item}/>)}
      </MenuWrapper>
      
      <MenuWrapper>
        <CategoryHeader id="breakfast" text="صبحانه" > <RiBreadLine/> </CategoryHeader>
        {menu.filter(item => item.category === 11).map(item => <Item key={item.id} item={item}/>)}
      </MenuWrapper>
      
    </>
  )
}
