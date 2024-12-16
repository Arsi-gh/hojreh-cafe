"use client"
import { TbListSearch } from "react-icons/tb";
import CategoryBtn from "../menu/categoryBtn";
import { GiCoffeePot } from "react-icons/gi";
import { RiCupLine } from "react-icons/ri";
import { RiDrinks2Line } from "react-icons/ri";
import { BiCoffeeTogo } from "react-icons/bi";
import { BsCupStraw } from "react-icons/bs";
import { LiaCoffeeSolid } from "react-icons/lia";
import { LuCupSoda } from "react-icons/lu";
import { TbCup } from "react-icons/tb";
import { LuCakeSlice } from "react-icons/lu";
import { LiaCookieBiteSolid } from "react-icons/lia";
import CategoryWrapper from "../menu/categoryWrapper";
import { usePathname } from "next/navigation";
import { TbArrowBackUp } from "react-icons/tb";
import { RiBreadLine } from "react-icons/ri";
import Link from "next/link";
import { useSearch } from "@/context/searchProvider";
import { HiMenuAlt1 } from "react-icons/hi";
import Sidebar from "./sidebar";
import { useState } from "react";


export default function Header() {

  const {setSearch} = useSearch()

  const [displaySidebar , setDisplaySidebar] = useState(false)

  return (
    <>
      <header className='max-w-screen-sm py-4 px-3 fixed top-1 left-1/2 transform -translate-x-1/2 w-full z-20'>
        <div className="border flex flex-wrap justify-between items-center p-3  rounded-xl bg-white bg-opacity-60 backdrop-blur-md relative">
          <HiMenuAlt1 onClick={() => setDisplaySidebar(true)} className="md:text-4xl text-3xl text-teritary-500 cursor-pointer -scale-x-100" />
          <Link className="absolute left-1/2 transform -translate-x-1/2 -top-4 drop-shadow-xl" href="/">
            <img className="w-14" src="/images/hojreh-logo.png" alt="cafe-logo" />
          </Link>
          <TbListSearch onClick={() => setSearch(true)} className="md:text-4xl text-3xl text-teritary-500 cursor-pointer"/>
          <MenuNav/>
        </div>
      </header>
      <Sidebar display={displaySidebar} displayHandler={setDisplaySidebar}/>
    </>
  )
}

const MenuNav = () => {

  const route = usePathname()


  if (route.includes("menu")) return (
    <CategoryWrapper>
      <Link href="/"><TbArrowBackUp className="cursor-pointer text-3xl -scale-x-100 text-teritary-500 text-opacity-90"/></Link>
      <CategoryBtn callBack={() => document.getElementById("cat-dami").scrollIntoView(true)}text="قهوه دمی" > <GiCoffeePot/> </CategoryBtn>
      <CategoryBtn callBack={() => document.getElementById("cat-espresoo").scrollIntoView(true)}text="اسپرسو" > <RiCupLine/> </CategoryBtn>
      <CategoryBtn callBack={() => document.getElementById("cat-basedEspresso").scrollIntoView(true)}text="بر پایه اسپرسو" > <RiDrinks2Line/> </CategoryBtn>
      <CategoryBtn callBack={() => document.getElementById("cat-milkEspresso").scrollIntoView(true)}text="شیر و اسپرسو" > <BiCoffeeTogo/> </CategoryBtn>
      <CategoryBtn callBack={() => document.getElementById("cat-basedMilk").scrollIntoView(true)}text="بر پایه شیر" > <TbCup/> </CategoryBtn>
      <CategoryBtn callBack={() => document.getElementById("cat-sharbat").scrollIntoView(true)}text="شربت ها" > <BsCupStraw/> </CategoryBtn>
      <CategoryBtn callBack={() => document.getElementById("cat-gasdar").scrollIntoView(true)}text="گازدار" > <LuCupSoda/> </CategoryBtn>
      <CategoryBtn callBack={() => document.getElementById("cat-damnoosh").scrollIntoView(true)}text="دمنوش" > <LiaCoffeeSolid/> </CategoryBtn>
      <CategoryBtn callBack={() => document.getElementById("cat-cake").scrollIntoView(true)}text="کیک و شیرینی" > <LuCakeSlice/> </CategoryBtn>
      <CategoryBtn callBack={() => document.getElementById("cat-cookie").scrollIntoView(true)}text="کوکی" > <LiaCookieBiteSolid/> </CategoryBtn>
      <CategoryBtn callBack={() => document.getElementById("cat-breakfast").scrollIntoView(true)}text="صبحانه" > <RiBreadLine/> </CategoryBtn>
    </CategoryWrapper>
  )
}