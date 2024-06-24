import Link from "next/link";
import { Children } from "react";
import {AiTwotoneHome} from 'react-icons/ai'
import {GiForkKnifeSpoon} from 'react-icons/gi'
import {PiCoffeeFill} from 'react-icons/pi'
import {GrMail} from 'react-icons/gr'
import {GiCampCookingPot} from 'react-icons/gi'
import styles from '../styles/recipe.module.css'


export default function Navbar({Children}) {
  return (
    <nav className="justify-between flex sm:flex-row bg-white items-center gap-9 text-xl px-6 h-[100px] right-0 left-0">
    <ul className="space-x-2 flex items-center capitalize">
      <li>
        <GiCampCookingPot className=" w-[100px] h-[80px] "/>
      </li>
      <li className=" font-bold">Recipe Central</li>
    </ul>

    <ul className="flex space-x-2 items-center  gap-8 capitalize mr-[50px]  text-sm">
      <Link href='/'>
        <AiTwotoneHome className=" h-[70px] w-[40px] top-0 pb-0 mb-0 pt-11 ml-4 pr-3" />
      <li className=" hover:border-black font-bold text-2xl">Home</li>
      </Link>
      <Link href='/specification'>
        <GiForkKnifeSpoon className=" h-[70px] w-[40px] top-0 pb-0 mb-0 pt-11 ml-11 pr-3"/>
      <li className="font-bold text-2xl">Specification</li>
      </Link>
      <Link href='/drinks'>
        <PiCoffeeFill className=" h-[70px] w-[40px] top-0 pb-0 mb-0 pt-11 ml-4 pr-3"/>
      <li className="font-bold text-2xl">drinks</li>
      </Link>
      <Link href='/contact-mail'>
        <GrMail className=" h-[70px] w-[40px] top-0 pb-0 mb-0 pt-11 ml-12 pr-3"/>
      <li className="font-bold text-2xl">contact/mail</li>
      </Link>
    </ul>

    <ul className={`flex space-x-1  gap-5 capitalize `} >
        <Link href='/getstarted'>
        <li className={`${styles.signup} justify-center items-center h-9`}>get started</li>
        </Link>
        <Link href='/signin'>
        <li className={`${styles.login} justify-center text-black border-solid- items-center h-9`}>signin</li>
        </Link>
    </ul>
   </nav>
  )
}

    //  {/* <h1 className="my-6 uppercase br text-center text-3xl tracking-[25px]">T - RECIP</h1> */}
    //     <Link href='/'>
    //     <li>home</li>
    //     </Link>
    //     <Link href='/videos'>
    //     <li>video</li>
    //     </Link>
    //     <Link href='/favourite'>
    //     <li>favourite</li>
    //     </Link>
    //     <Link href='/Cart'>
    //     <li>cart</li>
    //     </Link>
    //     <Link href='/market'>
    //     <li>Get Started</li>
    //     </Link>