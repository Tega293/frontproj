"use client"
import Image from 'next/image'

// import product from './components/'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import React, { useState } from 'react'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineStar} from 'react-icons/ai'
// import Icon from '../Icon'
import styles from '../styles/recipe.module.css'
import Link from 'next/link'

export const drinks = [
{
  id: 1,
    name: "Piña Colada",
    image: "https://example.com/pina_colada.jpg",
    season: "Summer",
    drinkClass: "Cocktail",
    nutrientProduced: "Vitamin C",
    yearInvented: 1954,
    recipe: ["60ml white rum", "90ml coconut cream", "90ml pineapple juice", "ice"],
    preparationTime: "5 minutes",
    instructions: "Blend all ingredients with ice until smooth. Pour into a chilled glass and garnish with a pineapple slice and cherry."
  },
  {
    id: 2,
    name: "Sangria",
    image: "https://example.com/sangria.jpg",
    season: "Summer",
    drinkClass: "Wine Cocktail",
    nutrientProduced: "Antioxidants",
    yearInvented: "1960s",
    recipe: ["750ml red wine", "1 orange (sliced)", "1 lemon (sliced)", "2 tbsp sugar", "60ml brandy", "1 can club soda", "ice"],
    preparationTime: "10 minutes",
    instructions: "Combine wine, orange, lemon, sugar, and brandy in a pitcher. Refrigerate for at least 2 hours. Add club soda and ice just before serving."
  },
  {
    id: 3,
    name: "Matcha Tea",
    image: "https://example.com/matcha_tea.jpg",
    season: "All seasons",
    drinkClass: "Tea",
    nutrientProduced: "Antioxidants",
    yearInvented: "12th century",
    recipe: ["1 tsp matcha powder", "60ml hot water", "240ml steamed milk (optional)"],
    preparationTime: "5 minutes",
    instructions: "Whisk matcha powder with hot water until frothy. Add steamed milk if desired."
  },
  {
    id: 4,
    name: "Caipirinha",
    image: "https://example.com/caipirinha.jpg",
    season: "Summer",
    drinkClass: "Cocktail",
    nutrientProduced: "Vitamin C",
    yearInvented: "1918",
    recipe: ["1 lime (cut into wedges)", "2 tsp sugar", "60ml cachaça", "ice"],
    preparationTime: "5 minutes",
    instructions: "Muddle lime wedges and sugar in a glass. Fill the glass with ice and pour cachaça over it. Stir well."
  },
  {
    id: 5,
    name: "Irish Coffee",
    image: "https://example.com/irish_coffee.jpg",
    season: "Winter",
    drinkClass: "Hot Beverage",
    nutrientProduced: "Caffeine",
    yearInvented: "1940s",
    recipe: ["120ml hot coffee", "1 tbsp brown sugar", "45ml Irish whiskey", "30ml fresh cream"],
    preparationTime: "5 minutes",
    instructions: "Stir hot coffee and sugar until dissolved. Add whiskey and stir. Float cream on top and serve hot."
  },
  {
    id: 6,
    name: "Bubble Tea",
    image: "https://example.com/bubble_tea.jpg",
    season: "All seasons",
    drinkClass: "Tea",
    nutrientProduced: "Carbohydrates",
    yearInvented: "1980s",
    recipe: ["240ml brewed tea", "2 tbsp milk", "2 tbsp tapioca pearls", "ice", "sweetener (optional)"],
    preparationTime: "10 minutes",
    instructions: "Cook tapioca pearls according to package instructions. Mix brewed tea, milk, and sweetener. Add ice and cooked tapioca pearls. Serve with a wide straw."
  },
  {
    id: 7,
    name: "Mojito",
    image: "https://example.com/mojito.jpg",
    season: "Summer",
    drinkClass: "Cocktail",
    nutrientProduced: "Vitamin C",
    yearInvented: "16th century",
    recipe: ["10 fresh mint leaves", "1/2 lime (cut into 4 wedges)", "2 tbsp sugar", "60ml white rum", "soda water", "ice"],
    preparationTime: "5 minutes",
    instructions: "Muddle mint leaves and 1 lime wedge in a glass. Add sugar and 2 more lime wedges and muddle again. Fill the glass with ice, pour in rum, and fill the glass with soda water. Stir and garnish with the remaining lime wedge."
  },
  {
    id: 8,
    name: "Lassi",
    image: "https://example.com/lassi.jpg",
    season: "Summer",
    drinkClass: "Yogurt Drink",
    nutrientProduced: "Protein",
    yearInvented: "Ancient times",
    recipe: ["240ml yogurt", "120ml water", "1 tbsp sugar", "1/4 tsp cardamom powder"],
    preparationTime: "5 minutes",
    instructions: "Blend yogurt, water, sugar, and cardamom powder until smooth. Serve chilled."
  },
  {
    id: 9,
    name: "Eggnog",
    image: "https://example.com/eggnog.jpg",
    season: "Winter",
    drinkClass: "Holiday Beverage",
    nutrientProduced: "Protein",
    yearInvented: "18th century",
    recipe: ["4 egg yolks", "100g sugar", "480ml milk", "240ml heavy cream", "120ml bourbon", "1/2 tsp grated nutmeg"],
    preparationTime: "15 minutes",
    instructions: "Beat egg yolks with sugar until thick. Add milk, cream, bourbon, and nutmeg. Stir well and refrigerate. Serve chilled."
  },
  {
    id: 10,
    name: "Lemonade",
    image: "https://example.com/lemonade.jpg",
    season: "Summer",
    drinkClass: "Non-Alcoholic Beverage",
    nutrientProduced: "Vitamin C",
    yearInvented: "17th century",
    recipe: ["4 lemons (juiced)", "1 liter water", "100g sugar"],
    preparationTime: "10 minutes",
    instructions: "Mix lemon juice, water, and sugar until sugar is dissolved. Serve chilled."
  },
  {
    id: 11,
    name: "Hot Chocolate",
    image: "https://example.com/hot_chocolate.jpg",
    season: "Winter",
    drinkClass: "Hot Beverage",
    nutrientProduced: "Antioxidants",
    yearInvented: "16th century",
    recipe: ["240ml milk", "2 tbsp cocoa powder", "2 tbsp sugar", "1/4 tsp vanilla extract"],
    preparationTime: "5 minutes",
    instructions: "Heat milk in a saucepan. Whisk in cocoa powder, sugar, and vanilla extract until smooth. Serve hot."
  },
  {
    id: 12,
    name: "Café de Olla",
    image: "https://example.com/cafe_de_olla.jpg",
    season: "Winter",
    drinkClass: "Hot Beverage",
    nutrientProduced: "Caffeine",
    yearInvented: "18th century",
    recipe: ["240ml water", "2 tbsp ground coffee", "1 cinnamon stick", "2 tbsp piloncillo (or brown sugar)"],
    preparationTime: "10 minutes",
    instructions: "Boil water with cinnamon and piloncillo. Add coffee and stir. Let it steep for 5 minutes. Strain and serve hot."
  },
  {
    id: 13,
    name: "Mai Tai",
    image: "https://example.com/mai_tai.jpg",
    season: "Summer",
    drinkClass: "Cocktail",
    nutrientProduced: "None",
    yearInvented: "1944",
    recipe: ["30ml white rum", "30ml dark rum", "15ml orange curaçao", "15ml orgeat syrup", "10ml lime juice", "ice"],
    preparationTime: "5 minutes",
    instructions: "Shake all ingredients with ice and strain into a glass filled with crushed ice. Garnish with a lime wheel and mint sprig."
  },
  {
    id: 14,
    name: "Turkish Coffee",
    image: "https://example.com/turkish_coffee.jpg",
    season: "All seasons",
    drinkClass: "Coffee",
    nutrientProduced: "Caffeine",
    yearInvented: "16th century",
    recipe: ["1 tsp finely ground coffee", "1 cup water", "1 tsp sugar (optional)", "cardamom (optional)"],
    preparationTime: "5 minutes",
    instructions: "Combine coffee, water, and sugar in a cezve (Turkish coffee pot). Heat slowly and bring to a boil. Remove from heat, let it settle, then boil again. Pour and serve."
  },
  {
    id: 15,
    name: "Margarita",
    image: "https://example.com/margarita.jpg",
    season: "Summer",
    drinkClass: "Cocktail",
    nutrientProduced: "None",
    yearInvented: "1938",
    recipe: ["45ml tequila", "30ml lime juice", "15ml triple sec", "salt for rim", "ice"],
    preparationTime: "5 minutes",
    instructions: "Rub the rim of a glass with a lime wedge and dip in salt. Shake tequila, lime juice, and triple sec with ice. Strain into the glass over ice. Garn"
  },
  {
    id: 16,
    name: "Chai Latte",
    image: "https://example.com/chai_latte.jpg",
    season: "Winter",
    drinkClass: "Tea",
    nutrientProduced: "Antioxidants",
    yearInvented: "Ancient times",
    recipe: ["240ml brewed chai tea", "240ml steamed milk", "1 tbsp honey"],
    preparationTime: "10 minutes",
    instructions: "Brew chai tea and mix with steamed milk and honey. Serve hot."
  },
  {
    id: 17,
    name: "Thai Iced Tea",
    image: "https://example.com/thai_iced_tea.jpg",
    season: "Summer",
    drinkClass: "Tea",
    nutrientProduced: "Caffeine",
    yearInvented: "20th century",
    recipe: ["240ml brewed black tea", "2 tbsp sweetened condensed milk", "ice"],
    preparationTime: "10 minutes",
    instructions: "Brew black tea and let it cool. Pour over ice and add sweetened condensed milk. Stir and serve."
  },
  {
    id: 18,
    name: "Negroni",
    image: "https://example.com/negroni.jpg",
    season: "All seasons",
    drinkClass: "Cocktail",
    nutrientProduced: "None",
    yearInvented: "1919",
    recipe: ["30ml gin", "30ml Campari", "30ml sweet vermouth", "ice", "orange peel for garnish"],
    preparationTime: "5 minutes",
    instructions: "Stir gin, Campari, and vermouth with ice. Strain into a glass over ice. Garnish with an orange peel."
  },
  {
    id: 19,
    name: "Kombucha",
    image: "https://example.com/kombucha.jpg",
    season: "All seasons",
    drinkClass: "Fermented Tea",
    nutrientProduced: "Probiotics",
    yearInvented: "Ancient times",
    recipe: ["1 liter water", "4 black tea bags", "100g sugar", "1 SCOBY"],
    preparationTime: "7-10 days",
    instructions: "Brew tea and dissolve sugar. Cool and add SCOBY. Let it ferment for 7-10 days. Bottle and refrigerate."
  },
  {
    id: 20,
    name: "Espresso Martini",
    image: "https://example.com/espresso_martini.jpg",
    season: "All seasons",
    drinkClass: "Cocktail",
    nutrientProduced: "Caffeine",
    yearInvented: "1983",
    recipe: ["30ml vodka", "30ml coffee liqueur", "30ml fresh espresso", "ice", "coffee beans for garnish"],
    preparationTime: "5 minutes",
    instructions: "Shake vodka, coffee liqueur, and espresso with ice. Strain into a chilled glass. Garnish with coffee beans."
  },
  {
    id: 21,
    name: "Mint Julep",
    image: "https://example.com/mint_julep.jpg",
    season: "Summer",
    drinkClass: "Cocktail",
    nutrientProduced: "None",
    yearInvented: "18th century",
    recipe: ["10 fresh mint leaves", "1 tsp sugar", "60ml bourbon", "ice"],
    preparationTime: "5 minutes",
    instructions: "Muddle mint and sugar in a glass. Fill with ice, add bourbon, and stir. Garnish with more mint."
  },
  {
    id: 22,
    name: "Falooda",
    image: "https://example.com/falooda.jpg",
    season: "Summer",
    drinkClass: "Dessert Beverage",
    nutrientProduced: "Carbohydrates",
    yearInvented: "Ancient times",
    recipe: ["240ml milk", "2 tbsp rose syrup", "1 tbsp basil seeds", "1 scoop ice cream", "vermicelli noodles"],
    preparationTime: "10 minutes",
    instructions: "Soak basil seeds in water. Cook vermicelli noodles. Mix milk and rose syrup. Layer noodles, basil seeds, and milk mixture in a glass. Top with ice cream."
  },
  {
    id: 23,
    name: "Bellini",
    image: "https://example.com/bellini.jpg",
    season: "Summer",
    drinkClass: "Cocktail",
    nutrientProduced: "Vitamin C",
    yearInvented: "1940s",
    recipe: ["60ml peach puree", "120ml Prosecco"],
    preparationTime: "5 minutes",
    instructions: "Pour peach puree into a glass. Top with Prosecco and stir gently."
  },
  {
    id: 24,
    name: "Cider",
    image: "https://example.com/cider.jpg",
    season: "Fall",
    drinkClass: "Alcoholic Beverage",
    nutrientProduced: "Antioxidants",
    yearInvented:"Ancient times",
    recipe: ["5 apples (juiced)", "1 tbsp sugar", "1 tsp yeast"],
    preparationTime: "1 week",
    instructions: "Juice apples and add sugar. Stir in yeast and let ferment for 1 week. Bottle and refrigerate."
  },
  {
    id: 25,
    name: "Frappe",
    image: "https://example.com/frappe.jpg",
    season: "Summer",
    drinkClass: "Coffee",
    nutrientProduced: "Caffeine",
    yearInvented: "1957",
    recipe: ["2 tsp instant coffee", "1 tsp sugar", "60ml water", "ice", "milk"],
    preparationTime: "5 minutes",
    instructions: "Shake coffee, sugar, and water until frothy. Pour into a glass over ice and top with milk."
  },
  {
    id: 26,
    name: "Tom Collins",
    image: "https://example.com/tom_collins.jpg",
    season: "Summer",
    drinkClass: "Cocktail",
    nutrientProduced: "None",
    yearInvented: "19th century",
    recipe: ["60ml gin", "30ml lemon juice", "15ml sugar syrup", "soda water", "ice"],
    preparationTime: "5 minutes",
    instructions: "Shake gin, lemon juice, and sugar syrup with ice. Strain into a glass over ice and top with soda water."
  },
  {
    id: 27,
    name: "Horchata",
    image: "https://example.com/horchata.jpg",
    season: "Summer",
    drinkClass: "Non-Alcoholic Beverage",
    nutrientProduced: "Calcium",
    yearInvented: "Ancient times",
    recipe: ["1 cup white rice", "1 liter water", "1 cup milk", "1/2 cup sugar", "1 tsp cinnamon"],
    preparationTime: "10 minutes + soaking time",
    instructions: "Soak rice in water overnight. Blend rice and water, then strain. Mix rice water with milk, sugar, and cinnamon. Serve chilled."
  },
  {
    id: 28,
    name: "Pisco Sour",
    image: "https://example.com/pisco_sour.jpg",
    season: "Summer",
    drinkClass: "Cocktail",
    nutrientProduced: "None",
    yearInvented: "1920s",
    recipe: ["60ml pisco", "30ml lime juice", "15ml simple syrup", "1 egg white", "ice", "bitters"],
    preparationTime: "5 minutes",
    instructions: "Shake pisco, lime juice, simple syrup, and egg white with ice. Strain into a glass and top with a few drops of bitters."
  },
  {
    id: 29,
    name: "Aperol Spritz",
    image: "https://example.com/aperol_spritz.jpg",
    season: "Summer",
    drinkClass: "Cocktail",
    nutrientProduced: "None",
    yearInvented: "1950s",
    recipe: ["60ml Aperol", "90ml Prosecco", "30ml soda water", "ice"],
    preparationTime: "5 minutes",
    instructions: "Pour Aperol, Prosecco, and soda water into a glass filled with ice. Stir gently and garnish with an orange slice."
  },
  {
    id: 30,
    name: "Cuba Libre",
    image: "https://example.com/cuba_libre.jpg",
    season: "Summer",
    drinkClass: "Cocktail",
    nutrientProduced: "Vitamin C",
    yearInvented: "1900s",
    recipe: ["60ml white rum", "120ml cola", "1/2 lime (juiced)", "ice"],
    preparationTime: "5 minutes",
    instructions: "Fill a glass with ice. Add rum, cola, and lime juice. Stir gently and garnish with a lime wedge."
  },
]

export default function Drinks(){
  const [searchRecipe, setSearchDrinks] = useState('')

  // const springFood = recipe.filter(recipe => recipe.season === 'Spring')
  
  const drinksfiltered = drinks.filter(drinks => drinks.name.toLowerCase().includes(searchDrinks.toLowerCase()))

  function temi(e){
    setSearchDrinks(e.target.value)
  }
  const drinkClass =drinkfiltered.map(drinks => (
    <section key={Math.random()} className={styles.setFuction}>
      <Link href={`/product/${drinks.id}`}>
        

        <Image src={drinks.image} alt={drinks.name} id='image' width={450} height={300} className={`${styles.image}`}/>
        
        <h2 className='pb-11'>
          <main className='flex flex-row'>
        <AiOutlineStar className=' after:bg-red-700'/> <AiOutlineStar/> <AiOutlineStar/> <AiOutlineStar/> <AiOutlineStar/></main>
          {food.name}
        </h2> 
        {/* <Icon /> */}
    </Link>
    </section>
  )) 
 

return (
  <>
  <div className='flex items-center justify-center my-5 '>
  <input type="text" name="" id="" placeholder={`search for food `}
  className='w-[40%]  text-black  py-2 border-2 border-solid border-b-red-500  rounded-xl '
  value={searchRecipe} 
  onChange={temi}/>

  </div>
  <main>
      <h1 className={`text-white  border-b-white  text-lg ${styles.h1}`}>
          Recent Drinks Recipe 
        </h1>
  </main>

  <div className={styles.main}>

      {foodClass}
  </div>
  </>
)
}
