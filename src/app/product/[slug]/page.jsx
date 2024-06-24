"use client"
import {food} from "@/app/Page"
import Image from "next/image"
import {GiChefToque} from 'react-icons/gi'
import {SlCalender} from 'react-icons/sl'
import {IoNutrition} from 'react-icons/io5'
import styles from '.././../styles/recipe.module.css'

export default function page({params}) {
    const food= recipe.find(rec => rec.id == params.slug)
  return (
    
    <section className=" bg-black text-white justify-center text-center  pt-10 ">
        <section className=" flex flex-row  gap-[150px] mx-11  my-11 border-4  border-white">
        <h1  className="  text-8xl font-bold  border border-white  items-center">{food.name}</h1> 
        <GiChefToque className=" w-[300px] h-[200px] pt-1 ml-7"/>
        <Image src={food.image} alt={food.name} width={550} height={500} className={` my-2 mr-5 ${styles.slug} `}/></section>
        <section className="flex flex-row gap-4 items-center  ">
          <div><Image src={food.image} alt={food.name} width={300} height={500} className=" my-2 ml-[20px] rounded-full "/></div>
          <div className="flex flex-row gap-4 w-[500px] h-[160px] bg-blue-950 items-center my-4 rounded-md font-bold px-3">
            <h2><SlCalender/> year invented: <br />{food.yearInvented}</h2>
            <p><IoNutrition/> nutrient produced: <br />{food.nutrientProduced}</p>
            <p>preparation time: <br />{food.recipe.preparationTime}</p>
             <p>food season: <br />{food.season}</p>
          </div>
        </section>
        
        
      <p>Description: {food.recipe.ingredients}</p>
        
      <p>instructions: {food.recipe.instructions}</p>
    </section>  
  )
}
