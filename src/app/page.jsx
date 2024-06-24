"use client"
import Image from 'next/image'

// import product from './components/'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import React, { useState } from 'react'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineStar} from 'react-icons/ai'
// import Icon from '../Icon'
import styles from '../app/styles/recipe.module.css'
import Link from 'next/link'

export const recipe = [
{
  id: 1,
  name: "Spaghetti Carbonara",
  image: "/images.jpeg",
  season: "All year",
  foodClass: "Pasta",
  nutrientProduced: "Protein",
  yearInvented: "20th century",
  recipe: {
    ingredients: [
      "200g spaghetti",
      "100g guanciale or pancetta, diced",
      "2 large eggs",
      "50g Pecorino Romano cheese, grated",
      "Salt and black pepper to taste"
    ],
    preparationTime: "20 minutes",
    instructions: [
      "Boil spaghetti in salted water until al dente. Drain and set aside.",
      "In a skillet, cook guanciale or pancetta until crispy. Remove from heat.",
      "In a bowl, whisk together eggs and grated cheese. Add cooked spaghetti and guanciale, mixing well.",
      "Season with salt and pepper. Serve immediately."
    ]
  }
},
{
  id: 2,
  name: "Sushi",
  image: "/sushi.jpg",
  season: "All year",
  foodClass: "Seafood",
  nutrientProduced: "Omega-3 fatty acids",
  yearInvented: "8th century",
  recipe: {
    ingredients: [
      "Sushi rice",
      "Fresh fish (e.g., tuna, salmon)",
      "Nori (seaweed)",
      "Soy sauce",
      "Wasabi",
      "Pickled ginger"
    ],
    preparationTime: "30 minutes",
    instructions: [
      "Prepare sushi rice according to package instructions.",
      "Place a sheet of nori on a bamboo sushi mat.",
      "Spread a thin layer of sushi rice over the nori, leaving a border at the top.",
      "Add thin slices of fresh fish and any desired toppings.",
      "Roll the sushi tightly, wetting the nori border to seal.",
      "Slice into bite-sized pieces and serve with soy sauce, wasabi, and pickled ginger."
    ]
  }
},
// Add more foods following the same format...
{
  id: 3,
  name: "Chicken Alfredo",
  image: "/chicken_alfredo.jpg",
  season: "All year",
  foodClass: "Pasta",
  nutrientProduced: "Protein",
  yearInvented: "20th century",
  recipe: {
    ingredients: [
      "8 oz fettuccine pasta",
      "2 boneless, skinless chicken breasts",
      "2 cups heavy cream",
      "1 cup grated Parmesan cheese",
      "2 cloves garlic, minced",
      "2 tablespoons butter",
      "Salt and black pepper to taste"
    ],
    preparationTime: "30 minutes",
    instructions: [
      "Cook fettuccine pasta according to package instructions. Drain and set aside.",
      "Season chicken breasts with salt and pepper, then cook in a skillet until fully cooked. Slice into strips.",
      "In the same skillet, melt butter and sauté garlic until fragrant. Add heavy cream and Parmesan cheese, stirring until the sauce thickens.",
      "Add cooked pasta and chicken strips to the sauce, tossing to coat. Serve hot."
    ]
  }
},
{
  id: 4,
  name: "Caesar Salad",
  image: "/ceaser-salad.jpeg",
  season: "All year",
  foodClass: "Salad",
  nutrientProduced: "Vitamins and minerals",
  yearInvented: "1920s",
  recipe: {
    ingredients: [
      "1 head of romaine lettuce, torn into bite-sized pieces",
      "1/2 cup croutons",
      "1/4 cup grated Parmesan cheese",
      "1/4 cup Caesar dressing",
      "1 lemon, juiced",
      "1 clove garlic, minced",
      "Salt and black pepper to taste"
    ],
    preparationTime: "15 minutes",
    instructions: [
      "In a large bowl, combine torn lettuce, croutons, and grated Parmesan cheese.",
      "In a separate bowl, whisk together Caesar dressing, lemon juice, minced garlic, salt, and pepper.",
      "Drizzle the dressing over the salad and toss to coat evenly. Serve immediately."
    ]
  }
},
{
  id: 5,
  name: "Tandoori Chicken",
  image: "/tandoori-chicken.jpg",
  season: "Summer",
  foodClass: "Poultry",
  nutrientProduced: "Protein",
  yearInvented: "20th century",
  recipe: {
    ingredients: [
      "4 bone-in, skin-on chicken thighs",
      "1 cup plain yogurt",
      "2 tablespoons tandoori spice blend",
      "2 tablespoons lemon juice",
      "2 cloves garlic, minced",
      "Salt and red chili powder to taste"
    ],
    preparationTime: "2 hours (marination) + 30 minutes",
    instructions: [
      "In a bowl, combine yogurt, tandoori spice blend, lemon juice, minced garlic, salt, and red chili powder.",
      "Score the chicken thighs and marinate them in the yogurt mixture for at least 2 hours in the refrigerator.",
      "Preheat grill to medium-high heat. Grill the chicken for about 30 minutes, turning occasionally until fully cooked and charred.",
      "Serve hot with naan bread and mint chutney."
    ]
  },
  
    id: 6,
    name: "Peking Duck",
    image: "/peking-duck.jpg",
    season: "Autumn",
    foodClass: "Poultry",
    nutrientProduced: "Protein",
    yearInvented: "13th century",
    recipe: {
      ingredients: [
        "1 whole duck",
        "4 tablespoons maltose syrup",
        "1 tablespoon five-spice powder",
        "1 cucumber, julienned",
        "10 thin pancakes",
        "Hoisin sauce",
        "Scallions"
      ],
      preparationTime: "3 hours (marination) + 2 hours (cooking)",
      instructions: [
        "Clean and marinate the duck with maltose syrup and five-spice powder for 3 hours.",
        "Roast the duck in an oven or hung in a special oven for about 2 hours until crispy and golden.",
        "Serve sliced duck with thin pancakes, hoisin sauce, julienned cucumber, and sliced scallions."
      ]
    }
  },
  {
    id: 7,
    name: "Gazpacho",
    image: "/gazpacho.jpg",
    season: "Summer",
    foodClass: "Soup",
    nutrientProduced: "Vitamins",
    yearInvented: "8th century",
    recipe: {
      ingredients: [
        "6 ripe tomatoes, diced",
        "1 cucumber, peeled and diced",
        "1 bell pepper, diced",
        "1 small red onion, finely chopped",
        "2 cloves garlic, minced",
        "4 cups tomato juice",
        "1/4 cup red wine vinegar",
        "1/4 cup olive oil",
        "Salt and black pepper to taste"
      ],
      preparationTime: "15 minutes",
      instructions: [
        "In a blender, combine diced tomatoes, cucumber, bell pepper, red onion, and garlic. Blend until smooth.",
        "Transfer the mixture to a large bowl, and stir in tomato juice, red wine vinegar, and olive oil.",
        "Season with salt and black pepper. Chill in the refrigerator for a few hours before serving."
      ]
    }
  },
  {
    id: 8,
    name: "Moussaka",
    image: "/moussaka.webp",
    season: "All year",
    foodClass: "Casserole",
    nutrientProduced: "Protein",
    yearInvented: "Early 20th century",
    recipe: {
      ingredients: [
        "1 lb ground lamb or beef",
        "1 eggplant, sliced",
        "2 potatoes, sliced",
        "1 onion, chopped",
        "2 cloves garlic, minced",
        "2 cups tomato sauce",
        "1/2 cup red wine",
        "1/2 cup grated Parmesan cheese",
        "1/2 cup milk",
        "2 tablespoons butter",
        "Salt and black pepper to taste"
      ],
      preparationTime: "1 hour",
      instructions: [
        "In a skillet, brown ground lamb or beef. Drain excess fat.",
        "In a separate pan, sauté chopped onion and minced garlic until translucent.",
        "Add tomato sauce, red wine, and browned meat to the onion mixture. Simmer for 10 minutes.",
        "In a separate pot, boil sliced eggplant and potatoes until tender. Drain.",
        "In a baking dish, layer eggplant, potatoes, and meat sauce. Repeat until all ingredients are used.",
        "In a saucepan, make a bechamel sauce by melting butter, adding flour, and then milk. Stir until thickened.",
        "Pour the bechamel sauce over the layers and top with grated Parmesan cheese.",
        "Bake in the oven at 350°F (175°C) for 30-40 minutes, or until the top is golden brown."
      ]
    }
  },
  {
    id: 9,
    name: "Pho",
    image: "/pho.jpeg",
    season: "All year",
    foodClass: "Soup",
    nutrientProduced: "Vitamins and Minerals",
    yearInvented: "Early 20th century",
    recipe: {
      ingredients: [
        "8 cups beef broth",
        "8 oz rice noodles",
        "1 lb beef (sirloin or flank), thinly sliced",
        "1 onion, sliced",
        "2-inch piece of ginger, sliced",
        "2 cloves garlic, minced",
        "2 tablespoons fish sauce",
        "1 tablespoon sugar",
        "Fresh herbs (cilantro, Thai basil, mint)",
        "Bean sprouts, lime wedges, and sliced chili peppers for garnish"
      ],
      preparationTime: "2 hours (broth) + 30 minutes",
      instructions: [
        "In a large pot, simmer beef broth with ginger, sliced onion, and fish sauce for at least 2 hours to make the broth flavorful.",
        "Cook rice noodles according to package instructions, drain, and set aside.",
        "In a serving bowl, place cooked rice noodles and thinly sliced raw beef on top.",
        "Ladle hot broth over the beef, which will cook it.",
        "Serve with minced garlic, sugar, fresh herbs, bean sprouts, lime wedges, and sliced chili peppers for garnish."
      ]
    }
  },
  {
    id: 10,
    name: "Ratatouille",
    image: "/raatatouille.jpg",
    season: "Summer",
    foodClass: "Vegetarian",
    nutrientProduced: "Vitamins and Fiber",
    yearInvented: "18th century",
    recipe: {
      ingredients: [
        "1 eggplant, diced",
        "2 zucchinis, diced",
        "1 red bell pepper, diced",
        "1 yellow bell pepper, diced",
        "1 onion, diced",
        "2 cloves garlic, minced",
        "2 tomatoes, diced",
        "2 tablespoons olive oil",
        "Fresh herbs (thyme, rosemary)",
        "Salt and black pepper to taste"
      ],
      preparationTime: "1 hour",
      instructions: [
        "In a large skillet, heat olive oil over medium heat. Sauté diced onion and minced garlic until fragrant.",
        "Add diced eggplant, zucchinis, and bell peppers. Cook until they start to soften.",
        "Stir in diced tomatoes, fresh herbs, salt, and black pepper. Simmer for about 20 minutes.",
        "Serve hot as a side dish or with crusty bread."
      ]
    },
  
    id: 11,
    name: "Tiramisu",
    image: "/tiramisu.jpeg",
    season: "All year",
    foodClass: "Dessert",
    nutrientProduced: "Energy",
    yearInvented: "1960s",
    recipe: {
      ingredients: [
        "6 egg yolks",
        "3/4 cup granulated sugar",
        "1 cup mascarpone cheese",
        "1 1/2 cups brewed espresso, cooled",
        "1 tablespoon cocoa powder",
        "Ladyfingers"
      ],
      preparationTime: "30 minutes",
      instructions: [
        "In a heatproof bowl, whisk egg yolks and sugar over a double boiler until thick and pale.",
        "Remove from heat and whisk in mascarpone cheese until smooth.",
        "Dip ladyfingers into espresso and layer them in a serving dish.",
        "Spread a layer of the mascarpone mixture over the ladyfingers.",
        "Repeat the layers and finish with a dusting of cocoa powder.",
        "Chill in the refrigerator for a few hours before serving."
      ]
    }
  },
  {
    id: 12,
    name: "Chicken Tikka Masala",
    image: "/chicken-tikka-masala.jpeg",
    season: "All year",
    foodClass: "Poultry",
    nutrientProduced: "Protein",
    yearInvented: "20th century",
    recipe: {
      ingredients: [
        "1 lb boneless, skinless chicken thighs",
        "1 cup plain yogurt",
        "2 tablespoons tikka masala spice blend",
        "1 onion, finely chopped",
        "2 cloves garlic, minced",
        "1 can (14 oz) tomato sauce",
        "1 cup heavy cream",
        "1/4 cup chopped cilantro",
        "Salt and red chili powder to taste"
      ],
      preparationTime: "2 hours (marination) + 30 minutes",
      instructions: [
        "In a bowl, combine yogurt, tikka masala spice blend, minced garlic, salt, and red chili powder.",
        "Marinate chicken thighs in the yogurt mixture for at least 2 hours in the refrigerator.",
        "Grill the marinated chicken until fully cooked and charred.",
        "In a separate pan, sauté finely chopped onion until translucent.",
        "Add tomato sauce and heavy cream to the pan, simmering for 10 minutes.",
        "Slice grilled chicken and add it to the sauce. Simmer for an additional 10 minutes.",
        "Garnish with chopped cilantro and serve with rice or naan bread."
      ]
    }
  },
  {
    id: 13,
    name: "Eggs Benedict",
    image: "/eggs-benedict.jpg",
    season: "All year",
    foodClass: "Breakfast",
    nutrientProduced: "Protein",
    yearInvented: "Late 19th century",
    recipe: {
      ingredients: [
        "2 English muffins, split and toasted",
        "4 poached eggs",
        "4 slices Canadian bacon or ham",
        "Hollandaise sauce",
        "Chives for garnish",
        "Salt and black pepper to taste"
      ],
      preparationTime: "30 minutes",
      instructions: [
        "Poach eggs in simmering water until the whites are set but the yolks remain runny. Remove with a slotted spoon.",
        "In a separate pan, cook Canadian bacon or ham until heated through.",
        "Place a slice of bacon on each toasted English muffin half, followed by a poached egg.",
        "Pour Hollandaise sauce over the eggs, garnish with chopped chives, and season with salt and pepper."
      ]
    }
  },
  {
    id: 14,
    name: "Beef Stroganoff",
    image: "/beef-stroganoff.jpg",
    season: "All year",
    foodClass: "Beef",
    nutrientProduced: "Protein",
    yearInvented: "19th century",
    recipe: {
      ingredients: [
        "1 lb beef sirloin, thinly sliced",
        "1 onion, chopped",
        "2 cloves garlic, minced",
        "1 cup sliced mushrooms",
        "1/4 cup sour cream",
        "1/4 cup beef broth",
        "2 tablespoons flour",
        "2 tablespoons butter",
        "1 tablespoon Dijon mustard",
        "Salt and black pepper to taste",
        "Egg noodles or rice for serving"
      ],
      preparationTime: "30 minutes",
      instructions: [
        "In a skillet, melt butter and cook chopped onion until translucent. Add minced garlic and sliced mushrooms, sautéing until tender.",
        "Add beef slices and cook until browned. Sprinkle flour over the mixture and stir for a few minutes.",
        "Stir in Dijon mustard and beef broth, simmering until the sauce thickens.",
        "Remove from heat and fold in sour cream. Season with salt and black pepper.",
        "Serve hot over cooked egg noodles or rice."
      ]
    }
  },
  {
    id: 15,
    name: "Caprese Salad",
    image: "/caprese-salad.webp",
    season: "Summer",
    foodClass: "Salad",
    nutrientProduced: "Vitamins and Minerals",
    yearInvented: "20th century",
    recipe: {
      ingredients: [
        "4 ripe tomatoes, sliced",
        "8 oz fresh mozzarella cheese, sliced",
        "Fresh basil leaves",
        "Extra-virgin olive oil",
        "Balsamic glaze",
        "Salt and black pepper to taste"
      ],
      preparationTime: "10 minutes",
      instructions: [
        "Arrange slices of tomatoes and fresh mozzarella cheese on a serving platter, alternating them.",
        "Tuck fresh basil leaves between the tomato and cheese slices.",
        "Drizzle with extra-virgin olive oil and balsamic glaze.",
        "Season with salt and black pepper. Serve immediately."
      ]
    },
    
      id: 16,
      name: "Lobster Bisque",
      image: "/lobster-bisque.jpeg",
      season: "All year",
      foodClass: "Seafood",
      nutrientProduced: "Omega-3 fatty acids",
      yearInvented: "19th century",
      recipe: {
        ingredients: [
          "2 lobsters, cooked and shelled",
          "1/4 cup butter",
          "1 onion, chopped",
          "2 carrots, chopped",
          "2 celery stalks, chopped",
          "2 cloves garlic, minced",
          "1/4 cup tomato paste",
          "1/4 cup all-purpose flour",
          "4 cups fish or vegetable broth",
          "1 cup heavy cream",
          "1/4 cup brandy",
          "Salt and white pepper to taste"
        ],
        preparationTime: "1 hour",
        instructions: [
          "In a large pot, melt butter and sauté chopped onion, carrots, celery, and minced garlic until softened.",
          "Stir in tomato paste and flour, cooking for a few minutes to remove the raw taste of the flour.",
          "Add lobster meat and brandy, and then slowly pour in the fish or vegetable broth, stirring constantly.",
          "Simmer for 30 minutes, then blend the soup until smooth.",
          "Return the soup to the pot, add heavy cream, and heat gently without boiling.",
          "Season with salt and white pepper. Serve hot."
        ]
      }
    },
    {
      id: 17,
      name: "Shrimp Scampi",
      image: "/shrimp-scampi.jpeg",
      season: "All year",
      foodClass: "Seafood",
      nutrientProduced: "Omega-3 fatty acids",
      yearInvented: "20th century",
      recipe: {
        ingredients: [
          "1 lb large shrimp, peeled and deveined",
          "8 oz linguine or spaghetti",
          "4 cloves garlic, minced",
          "1/4 cup white wine",
          "1/4 cup fresh lemon juice",
          "2 tablespoons unsalted butter",
          "2 tablespoons olive oil",
          "1/4 cup chopped fresh parsley",
          "Salt and red pepper flakes to taste"
        ],
        preparationTime: "30 minutes",
        instructions: [
          "Cook linguine or spaghetti according to package instructions. Drain and set aside.",
          "In a large skillet, heat olive oil and melt butter over medium heat. Add minced garlic and sauté until fragrant.",
          "Add shrimp to the skillet and cook until they turn pink and opaque.",
          "Pour in white wine and lemon juice, letting it simmer for a few minutes.",
          "Toss cooked pasta and chopped parsley into the skillet, mixing well with the shrimp and sauce.",
          "Season with salt and red pepper flakes. Serve hot."
        ]
      }
    },
    {
      id: 18,
      name: "Beef Wellington",
      image: "/beef-wellington.jpg",
      season: "All year",
      foodClass: "Beef",
      nutrientProduced: "Protein",
      yearInvented: "19th century",
      recipe: {
        ingredients: [
          "1.5 lb beef tenderloin",
          "2 tablespoons Dijon mustard",
          "8 oz mushrooms, finely chopped",
          "2 cloves garlic, minced",
          "1 package puff pastry sheets",
          "2 egg yolks, beaten",
          "Salt and black pepper to taste"
        ],
        preparationTime: "2 hours",
        instructions: [
          "Season beef tenderloin with salt and black pepper, then sear in a hot skillet until browned on all sides.",
          "Brush beef with Dijon mustard and let it cool.",
          "In a separate pan, sauté minced garlic and chopped mushrooms until all moisture evaporates.",
          "Roll out puff pastry and place seared beef in the center. Top with the mushroom mixture.",
          "Wrap the puff pastry around the beef, sealing the edges with beaten egg yolks.",
          "Bake in a preheated oven at 400°F (200°C) for 35-40 minutes until the pastry is golden and the beef is cooked to your liking.",
          "Let it rest for a few minutes before slicing and serving."
        ]
      }
    },
    {
      id: 19,
      name: "Goulash",
      image: "/goulash.jpg",
      season: "All year",
      foodClass: "Stew",
      nutrientProduced: "Protein",
      yearInvented: "9th century",
      recipe: {
        ingredients: [
          "2 lb beef stew meat, cubed",
          "2 onions, chopped",
          "2 cloves garlic, minced",
          "2 tablespoons paprika",
          "1 tablespoon tomato paste",
          "1 bell pepper, diced",
          "2 potatoes, diced",
          "2 cups beef broth",
          "1/4 cup sour cream",
          "Salt and black pepper to taste"
        ],
        preparationTime: "2 hours",
        instructions: [
          "In a large pot, brown cubed beef stew meat. Remove and set aside.",
          "In the same pot, sauté chopped onions and minced garlic until translucent.",
          "Stir in paprika and tomato paste, then add diced bell pepper and potatoes.",
          "Return the browned beef to the pot and pour in beef broth. Bring to a boil, then reduce heat and simmer for 1.5 hours or until the beef is tender.",
          "Remove from heat and stir in sour cream. Season with salt and black pepper. Serve hot."
        ]
      }
    },
    {
      id: 20,
      name: "Chocolate Fondue",
      image: "/chocolate-fondue.jpeg",
      season: "All year",
      foodClass: "Dessert",
      nutrientProduced: "Energy",
      yearInvented: "20th century",
      recipe: {
        ingredients: [
          "8 oz semi-sweet chocolate, chopped",
          "1/2 cup heavy cream",
          "1 teaspoon vanilla extract",
          "Assorted dippers (strawberries, bananas, marshmallows, pretzels)",
        ],
        preparationTime: "15 minutes",
        instructions: [
          "In a saucepan, heat heavy cream until hot but not boiling.",
          "Pour hot cream over chopped chocolate and let it sit for a minute.",
          "Stir until smooth and add vanilla extract.",
          "Transfer the chocolate mixture to a fondue pot and keep warm.",
          "Serve with assorted dippers for dipping into the chocolate fondue."
        ]
      },

      id: 21,
    name: "Pad Thai",
    image: "/pad-thai.jpg",
    season: "All year",
    foodClass: "Noodles",
    nutrientProduced: "Protein",
    yearInvented: "20th century",
    recipe: {
      ingredients: [
        "8 oz rice noodles",
        "2 tablespoons vegetable oil",
        "2 cloves garlic, minced",
        "8-10 large shrimp, peeled and deveined",
        "2 eggs, beaten",
        "2 tablespoons fish sauce",
        "1 tablespoon tamarind paste",
        "1 tablespoon sugar",
        "2 cups bean sprouts",
        "2 tablespoons crushed peanuts",
        "Lime wedges",
        "Fresh cilantro for garnish"
      ],
      preparationTime: "30 minutes",
      instructions: [
        "Cook rice noodles according to package instructions, drain, and set aside.",
        "Heat vegetable oil in a wok or large skillet. Add minced garlic and sauté until fragrant.",
        "Add shrimp and cook until pink, then push them to one side of the skillet.",
        "Pour beaten eggs into the other side of the skillet and scramble.",
        "Add cooked noodles, fish sauce, tamarind paste, and sugar. Toss to combine.",
        "Add bean sprouts and crushed peanuts, and stir-fry for a few more minutes.",
        "Serve hot with lime wedges and garnish with fresh cilantro."
      ]
    }
  },
  {
    id: 22,
    name: "Risotto",
    image: "/risotto.jpeg",
    season: "All year",
    foodClass: "Rice",
    nutrientProduced: "Carbohydrates",
    yearInvented: "Late Middle Ages",
    recipe: {
      ingredients: [
        "1 cup Arborio rice",
        "4 cups chicken or vegetable broth",
        "1/2 cup white wine",
        "1/2 cup grated Parmesan cheese",
        "1 onion, finely chopped",
        "2 cloves garlic, minced",
        "2 tablespoons butter",
        "2 tablespoons olive oil",
        "Salt and black pepper to taste"
      ],
      preparationTime: "30 minutes",
      instructions: [
        "In a saucepan, heat chicken or vegetable broth and keep it warm on low heat.",
        "In a large skillet, heat olive oil and butter over medium heat. Add chopped onion and minced garlic, sautéing until translucent.",
        "Stir in Arborio rice and cook for a few minutes until it's lightly toasted.",
        "Pour in white wine and cook until it's mostly absorbed by the rice.",
        "Begin adding the warm broth one ladle at a time, stirring constantly and waiting until each ladle is absorbed before adding the next.",
        "Continue this process until the rice is creamy and tender, which should take about 18-20 minutes.",
        "Remove from heat, stir in grated Parmesan cheese, and season with salt and black pepper. Serve hot."
      ]
    }
  },
  {
    id: 23,
    name: "Chicken Pot Pie",
    image: "/chicken-pot-pie.jpg",
    season: "All year",
    foodClass: "Poultry",
    nutrientProduced: "Protein",
    yearInvented: "19th century",
    recipe: {
      ingredients: [
        "2 cups cooked chicken, diced",
        "1 cup frozen mixed vegetables",
        "1 cup diced potatoes",
        "1/2 cup diced onion",
        "1/2 cup diced celery",
        "1/2 cup diced carrots",
        "1/4 cup butter",
        "1/3 cup all-purpose flour",
        "1 3/4 cups chicken broth",
        "2/3 cup milk",
        "Salt and black pepper to taste",
        "1 package refrigerated pie crusts"
      ],
      preparationTime: "1 hour",
      instructions: [
        "Preheat oven to 425°F (220°C).",
        "In a large skillet, melt butter over medium heat. Add diced onion, celery, carrots, and potatoes. Sauté until tender.",
        "Stir in all-purpose flour until well combined, then gradually add chicken broth and milk, stirring constantly until the mixture thickens.",
        "Add diced chicken and frozen mixed vegetables. Season with salt and black pepper. Remove from heat.",
        "Line a pie dish with one refrigerated pie crust. Pour in the chicken mixture.",
        "Cover with the second pie crust and crimp the edges to seal. Cut slits in the top crust to allow steam to escape.",
        "Bake in the preheated oven for 30-35 minutes or until the crust is golden brown. Let it cool slightly before serving."
      ]
    }
  },
  {
    id: 24,
    name: "Guacamole",
    image: "/guacamole.webp",
    season: "All year",
    foodClass: "Dip",
    nutrientProduced: "Vitamins and Healthy Fats",
    yearInvented: "16th century",
    recipe: {
      ingredients: [
        "3 ripe avocados",
        "1/2 cup diced onion",
        "1/2 cup diced tomato",
        "1/4 cup chopped cilantro",
        "2 cloves garlic, minced",
        "1 lime, juiced",
        "Salt and red pepper flakes to taste"
      ],
      preparationTime: "15 minutes",
      instructions: [
        "Cut avocados in half, remove the pits, and scoop the flesh into a bowl.",
        "Mash the avocados with a fork until mostly smooth but still slightly chunky.",
        "Stir in diced onion, diced tomato, chopped cilantro, minced garlic, and lime juice.",
        "Season with salt and red pepper flakes. Serve immediately with tortilla chips."
      ]
    }
  },
  {
    id: 25,
    name: "Ceviche",
    image: "/ceviche.jpg",
    season: "Summer",
    foodClass: "Seafood",
    nutrientProduced: "Protein",
    yearInvented: "16th century",
    recipe: {
      ingredients: [
        "1 lb white fish (such as tilapia or halibut), diced",
        "1/2 cup lime juice",
        "1/4 cup lemon juice",
        "1/2 cup diced red onion",
        "1/2 cup diced tomato",
        "1/4 cup chopped fresh cilantro",
        "1 jalapeño, seeded and minced",
        "Salt and black pepper to taste",
        "Tortilla chips or crackers for serving"
      ],
      preparationTime: "30 minutes",
      instructions: [
        "In a bowl, combine diced fish, lime juice, and lemon juice. Let it marinate in the refrigerator for about 15-20 minutes until the fish turns opaque.",
        "Stir in diced red onion, diced tomato, chopped cilantro, and minced jalapeño.",
        "Season with salt and black pepper. Serve chilled with tortilla chips or crackers."
      ]
    },
    id: 26,
    name: "Sushi",
    image: "/sushi.jpg",
    season: "All year",
    foodClass: "Seafood",
    nutrientProduced: "Protein",
    yearInvented: "8th century",
    recipe: {
      ingredients: [
        "Sushi rice",
        "Fresh fish (e.g., tuna, salmon, yellowtail)",
        "Nori (seaweed sheets)",
        "Soy sauce",
        "Wasabi",
        "Pickled ginger",
      ],
      preparationTime: "30 minutes",
      instructions: [
        "Prepare sushi rice according to package instructions and let it cool.",
        "Lay a bamboo sushi rolling mat on a clean surface and place a sheet of plastic wrap on top.",
        "Place a sheet of nori on the plastic wrap, wet your hands, and spread a thin layer of sushi rice evenly over the nori, leaving a small border at the top edge.",
        "Add strips of fresh fish, a touch of wasabi, and any other desired fillings along the center of the rice.",
        "Roll the nori tightly using the bamboo mat, applying gentle pressure as you go.",
        "Slice the sushi roll into bite-sized pieces and serve with soy sauce and pickled ginger."
      ]
    }
  },
  {
    id: 27,
    name: "Chicken Katsu",
    image: "/chicken-katsu.jpeg",
    season: "All year",
    foodClass: "Poultry",
    nutrientProduced: "Protein",
    yearInvented: "20th century",
    recipe: {
      ingredients: [
        "4 boneless, skinless chicken breasts",
        "Salt and black pepper to taste",
        "1/2 cup all-purpose flour",
        "2 large eggs, beaten",
        "1 cup panko breadcrumbs",
        "Vegetable oil for frying",
        "Tonkatsu sauce",
        "Cabbage, thinly shredded, for garnish"
      ],
      preparationTime: "30 minutes",
      instructions: [
        "Season chicken breasts with salt and black pepper.",
        "Dredge each chicken breast in flour, dip into beaten eggs, and coat with panko breadcrumbs.",
        "Heat vegetable oil in a skillet over medium-high heat. Fry the breaded chicken until golden brown and cooked through, about 4-5 minutes per side.",
        "Remove and drain on paper towels.",
        "Slice the chicken into strips and serve with tonkatsu sauce and shredded cabbage."
      ]
    }
  },
  {
    id: 28,
    name: "Tandoori Chicken",
    image: "/tandoori-chicken.jpg",
    season: "All year",
    foodClass: "Poultry",
    nutrientProduced: "Protein",
    yearInvented: "20th century",
    recipe: {
      ingredients: [
        "4 bone-in chicken thighs",
        "1 cup plain yogurt",
        "2 tablespoons tandoori spice mix",
        "2 cloves garlic, minced",
        "1-inch piece of ginger, grated",
        "Juice of 1 lemon",
        "Salt and red chili powder to taste",
      ],
      preparationTime: "2 hours (marination) + 30 minutes",
      instructions: [
        "In a bowl, combine yogurt, tandoori spice mix, minced garlic, grated ginger, lemon juice, salt, and red chili powder.",
        "Score the chicken thighs with a knife and coat them with the yogurt mixture. Marinate in the refrigerator for at least 2 hours or overnight.",
        "Preheat a grill or oven to medium-high heat. Grill the marinated chicken until fully cooked and slightly charred, about 20-25 minutes.",
        "Serve hot with naan bread and mint chutney."
      ]
    }
  },
  {
    id: 29,
    name: "Falafel",
    image: "/falafel.webp",
    season: "All year",
    foodClass: "Vegetarian",
    nutrientProduced: "Protein",
    yearInvented: "4th century",
    recipe: {
      ingredients: [
        "1 cup dried chickpeas",
        "1/2 cup chopped onion",
        "2 cloves garlic, minced",
        "1/4 cup fresh parsley, chopped",
        "1/4 cup fresh cilantro, chopped",
        "1 teaspoon ground cumin",
        "1 teaspoon ground coriander",
        "1/4 teaspoon cayenne pepper",
        "Salt and black pepper to taste",
        "1 teaspoon baking powder",
        "4-6 tablespoons all-purpose flour",
        "Vegetable oil for frying",
        "Pita bread and tahini sauce for serving"
      ],
      preparationTime: "8 hours (soaking) + 15 minutes",
      instructions: [
        "Place dried chickpeas in a bowl and cover with cold water. Allow them to soak overnight, then drain.",
        "In a food processor, combine soaked chickpeas, chopped onion, minced garlic, parsley, cilantro, cumin, coriander, cayenne pepper, salt, and black pepper. Blend until the mixture is finely ground but not pureed.",
        "Transfer the mixture to a bowl and stir in baking powder and enough flour to form a dough that can be easily shaped into balls.",
        "Shape the mixture into small balls or patties and place on a baking sheet.",
        "Heat vegetable oil in a deep pan over medium-high heat. Fry falafel until golden brown and crispy, about 4-5 minutes per side.",
        "Serve falafel in pita bread with tahini sauce and your choice of vegetables."
      ]
    }
  },
  {
    id: 30,
    name: "Tiramisu",
    image: "/tiramisu.webp",
    season: "All year",
    foodClass: "Dessert",
    nutrientProduced: "Energy",
    yearInvented: "20th century",
    recipe: {
      ingredients: [
        "6 egg yolks",
        "3/4 cup granulated sugar",
        "1 cup mascarpone cheese",
        "1 1/2 cups brewed espresso, cooled",
        "1 tablespoon cocoa powder",
        "Ladyfingers"
      ],
      preparationTime: "30 minutes",
      instructions: [
        "In a heatproof bowl, whisk egg yolks and sugar over a double boiler until thick and pale.",
        "Remove from heat and whisk in mascarpone cheese until smooth.",
        "Dip ladyfingers into espresso and layer them in a serving dish.",
        "Spread a layer of the mascarpone mixture over the ladyfingers.",
        "Repeat the layers and finish with a dusting of cocoa powder.",
        "Chill in the refrigerator for a few hours before serving."
      ]
    },
    id: 31,
    name: "Moussaka",
    image: "/moussaka.webp",
    season: "All year",
    foodClass: "Casserole",
    nutrientProduced: "Protein",
    yearInvented: "19th century",
    recipe: {
      ingredients: [
        "2 eggplants, sliced into rounds",
        "1 lb ground beef or lamb",
        "1 onion, chopped",
        "2 cloves garlic, minced",
        "1 can (14 oz) diced tomatoes",
        "1/4 cup red wine",
        "1 teaspoon ground cinnamon",
        "1/2 teaspoon ground nutmeg",
        "2 tablespoons olive oil",
        "Salt and black pepper to taste",
        "Bechamel sauce",
      ],
      preparationTime: "2 hours",
      instructions: [
        "Sprinkle eggplant slices with salt and let them sit for 30 minutes to remove excess moisture. Rinse and pat dry.",
        "In a large skillet, heat olive oil over medium heat. Sauté chopped onion and minced garlic until softened.",
        "Add ground beef or lamb and cook until browned. Stir in diced tomatoes, red wine, ground cinnamon, and ground nutmeg. Simmer for 15-20 minutes.",
        "In a separate pan, lightly fry the eggplant slices until golden brown on both sides. Drain on paper towels.",
        "Preheat the oven to 350°F (175°C).",
        "In a baking dish, layer half of the eggplant slices, followed by the meat mixture, and then the remaining eggplant slices.",
        "Prepare the Bechamel sauce and pour it over the top layer.",
        "Bake for 45-50 minutes until the top is golden and the moussaka is heated through. Let it cool slightly before serving."
      ]
    }
  },
  // {
  //   id: 32,
  //   name: "Pho",
  //   image: "pho.jpg",
  //   season: "All year",
  //   foodClass: "Noodles",
  //   nutrientProduced: "Protein",
  //   yearInvented: "20th century",
  //   recipe: {
  //     ingredients: [
  //       "8 cups beef broth",
  //       "1 lb rice noodles",
  //       "1 lb thinly sliced beef (flank, sirloin, or eye of round)",
  //       "1 onion, thinly sliced",
  //       "2-3 cloves garlic, minced",
  //       "1 tablespoon ginger, grated",
  //       "1 cinnamon stick",
  //       "2 star anise pods",
  //       "1 tablespoon fish sauce",
  //       "Bean sprouts, fresh basil leaves, lime wedges, and Sriracha sauce for garnish"
  //     ],
  //     preparationTime: "2 hours",
  //     instructions: [
  //       "In a large pot, heat the beef broth, onion, garlic, ginger, cinnamon stick, star anise pods, and fish sauce. Simmer for 1-2 hours.",
  //       "Cook rice noodles according to package instructions, drain, and set aside.",
  //       "Thinly slice the beef and set it aside.",
  //       "Strain the broth to remove solids.",
  //       "To serve, divide cooked noodles among bowls. Top with sliced beef.",
  //       "Pour hot beef broth over the noodles and beef. The hot broth will cook the beef slices.",
  //       "Serve with bean sprouts, fresh basil leaves, lime wedges, and Sriracha sauce for garnish."
  //     ]
  //   }
  // },
  // {
  //   id: 33,
  //   name: "Gazpacho",
  //   image: "gazpacho.jpg",
  //   season: "Summer",
  //   foodClass: "Soup",
  //   nutrientProduced: "Vitamins and Minerals",
  //   yearInvented: "8th century",
  //   recipe: {
  //     ingredients: [
  //       "6 ripe tomatoes, chopped",
  //       "1 cucumber, peeled and chopped",
  //       "1 bell pepper, chopped",
  //       "1 small red onion, chopped",
  //       "2 cloves garlic, minced",
  //       "3 cups tomato juice",
  //       "1/4 cup red wine vinegar",
  //       "1/4 cup olive oil",
  //       "1 teaspoon sugar",
  //       "Salt and black pepper to taste",
  //       "Fresh basil leaves and croutons for garnish"
  //     ],
  //     preparationTime: "20 minutes",
  //     instructions: [
  //       "In a blender or food processor, combine chopped tomatoes, cucumber, bell pepper, red onion, and minced garlic.",
  //       "Blend until smooth, then add tomato juice, red wine vinegar, olive oil, sugar, salt, and black pepper. Blend until well combined.",
  //       "Chill the gazpacho in the refrigerator for at least 2 hours to allow the flavors to meld.",
  //       "Serve cold, garnished with fresh basil leaves and croutons."
  //     ]
  //   }
  // },
  // {
  //   id: 34,
  //   name: "Beignets",
  //   image: "beignets.jpg",
  //   season: "All year",
  //   foodClass: "Dessert",
  //   nutrientProduced: "Energy",
  //   yearInvented: "18th century",
  //   recipe: {
  //     ingredients: [
  //       "1 packet active dry yeast",
  //       "1/2 cup warm water",
  //       "1/4 cup granulated sugar",
  //       "2 tablespoons vegetable shortening",
  //       "1/2 teaspoon salt",
  //       "1/2 cup boiling water",
  //       "1/2 cup evaporated milk",
  //       "2 eggs, beaten",
  //       "4 cups all-purpose flour",
  //       "Vegetable oil for frying",
  //       "Powdered sugar for dusting"
  //     ],
  //     preparationTime: "2 hours",
  //     instructions: [
  //       "In a small bowl, combine active dry yeast, warm water, and a pinch of sugar. Let it sit for 5 minutes until frothy.",
  //       "In a large bowl, mix together vegetable shortening, sugar, and salt. Pour in boiling water and stir until shortening is melted.",
  //       "Add evaporated milk and beaten eggs, then stir in the yeast mixture.",
  //       "Gradually add flour and mix until a sticky dough forms. Cover and let it rise for 1-2 hours until doubled in size.",
  //       "Heat vegetable oil in a deep pot to 360°F (180°C).",
  //       "Drop spoonfuls of dough into the hot oil and fry until golden brown, turning as needed.",
  //       "Remove beignets from the oil and drain on paper towels. Dust with powdered sugar and serve hot."
  //     ]
  //   }
  // },
  // {
  //   id: 35,
  //   name: "Chicken Shawarma",
  //   image: "chicken-shawarma.jpg",
  //   season: "All year",
  //   foodClass: "Poultry",
  //   nutrientProduced: "Protein",
  //   yearInvented: "19th century",
  //   recipe: {
  //     ingredients: [
  //       "2 lbs boneless, skinless chicken thighs",
  //       "1/4 cup plain yogurt",
  //       "2 tablespoons olive oil",
  //       "2 cloves garlic, minced",
  //       "1 teaspoon ground cumin",
  //       "1 teaspoon ground paprika",
  //       "1/2 teaspoon ground coriander",
  //       "1/2 teaspoon ground turmeric",
  //       "1/4 teaspoon cayenne pepper",
  //       "Salt and black pepper to taste",
  //       "Pita bread, tahini sauce, and vegetables for serving"
  //     ],
  //     preparationTime: "2 hours",
  //     instructions: [
  //       "In a bowl, combine plain yogurt, olive oil, minced garlic, ground cumin, ground paprika, ground coriander, ground turmeric, cayenne pepper, salt, and black pepper.",
  //       "Add chicken thighs to the marinade, ensuring they are well coated. Cover and refrigerate for at least 2 hours or overnight.",
  //       "Preheat a grill or grill pan over medium-high heat. Grill the marinated chicken until fully cooked and slightly charred, about 6-8 minutes per side.",
  //       "Slice the grilled chicken and serve in pita bread with tahini sauce and vegetables."
  //     ]
  //   },

  //   id: 36,
  //   name: "Ratatouille",
  //   image: "ratatouille.jpg",
  //   season: "Summer",
  //   foodClass: "Vegetarian",
  //   nutrientProduced: "Vitamins and Minerals",
  //   yearInvented: "18th century",
  //   recipe: {
  //     ingredients: [
  //       "1 eggplant, diced",
  //       "2 zucchinis, diced",
  //       "1 red bell pepper, diced",
  //       "1 yellow bell pepper, diced",
  //       "1 onion, diced",
  //       "2 cloves garlic, minced",
  //       "2 tomatoes, diced",
  //       "2 tablespoons olive oil",
  //       "1 teaspoon dried thyme",
  //       "1 teaspoon dried rosemary",
  //       "Salt and black pepper to taste",
  //       "Fresh basil leaves for garnish"
  //     ],
  //     preparationTime: "1 hour",
  //     instructions: [
  //       "In a large skillet, heat olive oil over medium heat. Sauté diced onion and minced garlic until softened.",
  //       "Add diced eggplant, zucchinis, red bell pepper, and yellow bell pepper. Cook until the vegetables start to soften.",
  //       "Stir in diced tomatoes, dried thyme, dried rosemary, salt, and black pepper. Simmer for 15-20 minutes until all vegetables are tender.",
  //       "Serve hot, garnished with fresh basil leaves."
  //     ]
  //   }
  // },
  // {
  //   id: 37,
  //   name: "Baklava",
  //   image: "baklava.jpg",
  //   season: "All year",
  //   foodClass: "Dessert",
  //   nutrientProduced: "Energy",
  //   yearInvented: "8th century",
  //   recipe: {
  //     ingredients: [
  //       "1 package phyllo dough",
  //       "1 cup unsalted butter, melted",
  //       "2 cups mixed nuts (e.g., walnuts, pistachios), finely chopped",
  //       "1 teaspoon ground cinnamon",
  //       "1 cup granulated sugar",
  //       "1/2 cup water",
  //       "1/4 cup honey",
  //       "1 teaspoon vanilla extract",
  //       "1 teaspoon lemon juice"
  //     ],
  //     preparationTime: "2 hours",
  //     instructions: [
  //       "Preheat the oven to 350°F (175°C).",
  //       "In a bowl, mix finely chopped nuts and ground cinnamon.",
  //       "Brush a baking dish with melted butter. Place a sheet of phyllo dough in the dish and brush it with more melted butter. Repeat until you have about 6 sheets layered.",
  //       "Sprinkle a portion of the nut mixture over the phyllo dough.",
  //       "Continue layering and buttering phyllo sheets, then adding nut mixture until all nuts are used.",
  //       "Finish with a final layer of phyllo dough, using about 6 sheets, and brushing the top generously with butter.",
  //       "Using a sharp knife, cut baklava into diamond or square shapes before baking.",
  //       "Bake in the preheated oven for about 50-60 minutes until golden brown and crisp.",
  //       "While baklava is baking, prepare the syrup by combining granulated sugar, water, honey, vanilla extract, and lemon juice in a saucepan. Bring to a boil, then reduce heat and simmer for 10 minutes.",
  //       "Remove baklava from the oven and immediately pour the hot syrup over it. Allow it to cool completely before serving."
  //     ]
  //   }
  // },
  // {
  //   id: 38,
  //   name: "Tom Yum Soup",
  //   image: "tom-yum-soup.jpg",
  //   season: "All year",
  //   foodClass: "Soup",
  //   nutrientProduced: "Vitamins and Minerals",
  //   yearInvented: "19th century",
  //   recipe: {
  //     ingredients: [
  //       "4 cups chicken or vegetable broth",
  //       "2 stalks lemongrass, cut into 2-inch pieces",
  //       "3-4 slice s galangal or ginger",
  //       "3-4 kaffir lime leaves",
  //       "2-3 Thai bird's eye chilies, smashed",
  //       "200g shrimp, peeled and deveined",
  //       "200g mushrooms, sliced",
  //       "1 tomato, cut into wedges",
  //       "1 small onion, sliced",
  //       "2-3 tablespoons fish sauce",
  //       "1-2 tablespoons lime juice",
  //       "1 teaspoon sugar",
  //       "Fresh cilantro leaves for garnish"
  //     ],
  //     preparationTime: "30 minutes",
  //     instructions: [
  //       "In a pot, bring chicken or vegetable broth to a boil.",
  //       "Add lemongrass, galangal or ginger, kaffir lime leaves, and smashed Thai bird's eye chilies to the boiling broth.",
  //       "Simmer for 5-10 minutes to infuse the flavors.",
  //       "Add shrimp, mushrooms, tomato wedges, and sliced onion. Cook until shrimp turns pink and mushrooms are tender.",
  //       "Season with fish sauce, lime juice, and sugar. Adjust the flavors to your preference.",
  //       "Remove from heat and discard the lemongrass, galangal, kaffir lime leaves, and Thai bird's eye chilies.",
  //       "Serve hot, garnished with fresh cilantro leaves."
  //     ]
  //   }
  // },
  // {
  //   id: 39,
  //   name: "Sushi Burrito",
  //   image: "sushi-burrito.jpg",
  //   season: "All year",
  //   foodClass: "Seafood",
  //   nutrientProduced: "Protein",
  //   yearInvented: "21st century",
  //   recipe: {
  //     ingredients: [
  //       "Nori sheets",
  //       "Sushi rice",
  //       "Sashimi-grade fish (e.g., tuna, salmon)",
  //       "Sliced avocado",
  //       "Cucumber strips",
  //       "Carrot strips",
  //       "Soy sauce",
  //       "Wasabi",
  //       "Pickled ginger"
  //     ],
  //     preparationTime: "30 minutes",
  //     instructions: [
  //       "Lay a sheet of plastic wrap on a clean surface. Place a nori sheet on top.",
  //       "Spread a layer of sushi rice over the nori sheet, leaving a small border at the top edge.",
  //       "Add slices of sashimi-grade fish, sliced avocado, cucumber strips, and carrot strips in the center of the rice.",
  //       "Roll the nori tightly, using the plastic wrap to help. Seal the edge with a small amount of water.",
  //       "Slice the sushi burrito in half and serve with soy sauce, wasabi, and pickled ginger."
  //     ]
  //   }
  // },
  // {
  //   id: 40,
  //   name: "Churros",
  //   image: "churros.jpg",
  //   season: "All year",
  //   foodClass: "Dessert",
  //   nutrientProduced: "Energy",
  //   yearInvented: "19th century",
  //   recipe: {
  //     ingredients: [
  //       "1 cup water",
  //       "2 tablespoons granulated sugar",
  //       "1/2 teaspoon salt",
  //       "2 tablespoons vegetable oil",
  //       "1 cup all-purpose flour",
  //       "Vegetable oil for frying",
  //       "1/4 cup granulated sugar (for coating)",
  //       "1/2 teaspoon ground cinnamon (for coating)",
  //       "Chocolate sauce for dipping"
  //     ],
  //     preparationTime: "30 minutes",
  //     instructions: [
  //       "In a saucepan, combine water, granulated sugar, salt, and 2 tablespoons of vegetable oil. Bring to a boil.",
  //       "Remove from heat and stir in all-purpose flour until the mixture forms a ball of dough.",
  //       "Heat vegetable oil in a deep pot or skillet for frying to 375°F (190°C).",
  //       "Transfer the churro dough to a piping bag fitted with a star tip. Pipe strips of dough into the hot oil, cutting them with scissors or a knife.",
  //       "Fry churros until golden brown, about 2-3 minutes per side. Drain on paper towels.",
  //       "In a bowl, combine 1/4 cup granulated sugar and ground cinnamon. Roll the fried churros in the sugar-cinnamon mixture to coat.",
  //       "Serve hot with chocolate sauce for dipping."
  //     ]
  //   }
 

  
  // },
]


  
  
  export default function Recipe(){
    const [searchRecipe, setSearchRecipe] = useState('')

    // const springFood = recipe.filter(recipe => recipe.season === 'Spring')
    
    const foodfiltered = recipe.filter(recipe => recipe.name.toLowerCase().includes(searchRecipe.toLowerCase()))

    function temi(e){
      setSearchRecipe(e.target.value)
    }
    const foodClass =foodfiltered.map(food => (
      <section key={Math.random()} className={styles.setFuction}>
        <Link href={`/product/${food.id}`}>
          

          <Image src={food.image} alt={food.name} id='image' width={450} height={300} className={`${styles.image}`}/>
          
          <h2 className='pb-11'>
            <main className='flex flex-row'>
          <AiOutlineStar className=' after:bg-red-700'/> <AiOutlineStar/> <AiOutlineStar/> <AiOutlineStar/> <AiOutlineStar/></main>
            {food.name }
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
            Recent Recipe
          </h1>
    </main>

    <div className={styles.main}>

        {foodClass}
    </div>
    </>
  )
  }
