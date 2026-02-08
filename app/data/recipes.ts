// src/data/recipes.ts

export interface IngredientGroup {
  main: string[];
  sauce?: string[];
}

export interface Direction {
  id: number;
  title: string;
  description: string;
  image?: string;
}

export interface Recipe {
  id: number;
  title: string;
  slug: string;
  image: string;
  time: string;
  category: string;
  author: string;
  date: string;
  prepTime: string;
  cookTime: string;
  description: string;
  nutrition: {
    calories: string;
    fat: string;
    protein: string;
    carbs: string;
    cholesterol: string;
  };
  ingredients: IngredientGroup;
  directions: Direction[];
  isAd?: boolean;
}

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    slug: "big-and-juicy-wagyu-beef-cheeseburger",
    image: "/photo/hr1.png",
    time: "30 Minutes",
    category: "Snack",
    author: "John Smith",
    date: "15 March 2022",
    prepTime: "15 Minutes",
    cookTime: "15 Minutes",
    description:
      "Nikmati sensasi daging Wagyu premium yang juicy dengan lapisan keju cheddar yang meleleh sempurna di dalam roti brioche panggang.",
    nutrition: {
      calories: "550 kcal",
      fat: "35 g",
      protein: "40 g",
      carbs: "25 g",
      cholesterol: "95 mg",
    },
    ingredients: {
      main: [
        "400g Wagyu Beef Patty",
        "2 Brioche Buns",
        "2 slices Cheddar Cheese",
        "Fresh Lettuce",
        "Slices of Tomato",
      ],
      sauce: ["2 tbsp Mayonnaise", "1 tbsp Mustard", "1 tsp Garlic Powder"],
    },
    directions: [
      {
        id: 1,
        title: "Prepare the Patty",
        description:
          "Bentuk daging wagyu menjadi patty bundar. Berikan sedikit garam dan lada hitam di kedua sisi.",
        image: "/images/cooking-step.jpg",
      },
      {
        id: 2,
        title: "Grilling",
        description:
          "Panggang patty di atas pan panas selama 3-4 menit setiap sisi untuk tingkat kematangan medium-well.",
      },
    ],
  },
  {
    id: 2,
    title: "Fresh Lime Roasted Salmon with Ginger Sauce",
    slug: "fresh-lime-roasted-salmon-with-ginger-sauce",
    image: "/photo/hr2.png",
    time: "30 Minutes",
    category: "Fish",
    author: "Andreas Paula",
    date: "12 April 2022",
    prepTime: "10 Minutes",
    cookTime: "20 Minutes",
    description:
      "Salmon panggang yang segar dengan aroma jeruk nipis dan sentuhan saus jahe yang hangat.",
    nutrition: {
      calories: "320 kcal",
      fat: "18 g",
      protein: "34 g",
      carbs: "5 g",
      cholesterol: "60 mg",
    },
    ingredients: {
      main: ["2 Fillet Salmon Segar", "1 buah Jeruk Nipis", "Garam & Merica"],
      sauce: ["3 cm Jahe parut", "2 sdm Kecap Asin", "1 sdt Madu"],
    },
    directions: [
      {
        id: 1,
        title: "Marination",
        description:
          "Lumuri salmon dengan jeruk nipis dan diamkan selama 10 menit.",
        image: "/images/cooking-step.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Strawberry Oatmeal Pancake with Honey Syrup",
    slug: "strawberry-oatmeal-pancake-with-honey-syrup",
    image: "/photo/hr3.png",
    time: "30 Minutes",
    category: "Breakfast",
    author: "John Smith",
    date: "05 May 2022",
    prepTime: "15 Minutes",
    cookTime: "15 Minutes",
    description:
      "Sarapan sehat dan mengenyangkan dengan pancake gandum dan stroberi segar.",
    nutrition: {
      calories: "280 kcal",
      fat: "8 g",
      protein: "12 g",
      carbs: "45 g",
      cholesterol: "25 mg",
    },
    ingredients: {
      main: [
        "1 cup Oatmeal",
        "2 butir Telur",
        "1/2 cup Susu Almond",
        "Fresh Strawberries",
      ],
      sauce: ["Honey Syrup"],
    },
    directions: [
      {
        id: 1,
        title: "Blending",
        description:
          "Haluskan oatmeal menggunakan blender hingga menjadi tepung halus.",
        image: "/images/cooking-step.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Fresh and Healthy Mixed Mayonnaise Salad",
    slug: "fresh-and-healthy-mixed-mayonnaise-salad",
    image: "/photo/hr4.png",
    time: "30 Minutes",
    category: "Healthy",
    author: "Andreas Paula",
    date: "10 June 2022",
    prepTime: "20 Minutes",
    cookTime: "0 Minutes",
    description:
      "Kombinasi sayuran segar pilihan dengan saus mayones yang creamy namun tetap ringan.",
    nutrition: {
      calories: "150 kcal",
      fat: "10 g",
      protein: "3 g",
      carbs: "12 g",
      cholesterol: "10 mg",
    },
    ingredients: {
      main: ["Letus", "Jagung Manis", "Timun", "Wortel"],
      sauce: ["Low-fat Mayonnaise", "Lemon juice"],
    },
    directions: [
      {
        id: 1,
        title: "Mixing",
        description:
          "Campurkan semua sayuran ke dalam wadah besar dan aduk rata.",
        image: "/images/cooking-step.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Chicken Meatballs with Cream Cheese",
    slug: "chicken-meatballs-with-cream-cheese",
    image: "/photo/hr5.png",
    time: "30 Minutes",
    category: "Meat",
    author: "John Smith",
    date: "22 July 2022",
    prepTime: "15 Minutes",
    cookTime: "15 Minutes",
    description:
      "Bola-bola ayam lembut dengan kejutan krim keju gurih di dalamnya.",
    nutrition: {
      calories: "410 kcal",
      fat: "22 g",
      protein: "28 g",
      carbs: "15 g",
      cholesterol: "45 mg",
    },
    ingredients: {
      main: ["500g Daging Ayam Cincang", "Cream Cheese", "Tepung Roti"],
      sauce: ["Tomato Puree", "Oregano"],
    },
    directions: [
      {
        id: 1,
        title: "Stuffing",
        description: "Isi bola ayam dengan satu sendok teh krim keju.",
        image: "/images/cooking-step.jpg",
      },
    ],
  },
  {
    id: 7,
    title: "Fruity Pancake with Orange & Blueberry",
    slug: "fruity-pancake-with-orange-and-blueberry",
    image: "/photo/hr6.png",
    time: "30 Minutes",
    category: "Sweet",
    author: "Andreas Paula",
    date: "15 August 2022",
    prepTime: "10 Minutes",
    cookTime: "20 Minutes",
    description:
      "Pancake manis dengan perpaduan rasa asam segar dari jeruk dan blueberry.",
    nutrition: {
      calories: "310 kcal",
      fat: "9 g",
      protein: "8 g",
      carbs: "52 g",
      cholesterol: "30 mg",
    },
    ingredients: {
      main: ["Pancake Mix", "Blueberries", "Orange Zest"],
      sauce: ["Maple Syrup"],
    },
    directions: [
      {
        id: 1,
        title: "Cooking",
        description:
          "Masak pancake hingga kecokelatan dan taburkan blueberry di atasnya.",
        image: "/images/cooking-step.jpg",
      },
    ],
  },
  {
    id: 8,
    title: "The Best Easy One Pot Chicken and Rice",
    slug: "the-best-easy-one-pot-chicken-and-rice",
    image: "/photo/hr7.png",
    time: "30 Minutes",
    category: "Snack",
    author: "John Smith",
    date: "10 September 2022",
    prepTime: "10 Minutes",
    cookTime: "20 Minutes",
    description:
      "Hidangan praktis satu panci yang menggabungkan ayam gurih dan nasi rempah.",
    nutrition: {
      calories: "450 kcal",
      fat: "15 g",
      protein: "32 g",
      carbs: "48 g",
      cholesterol: "55 mg",
    },
    ingredients: {
      main: ["Chicken Thighs", "Basmati Rice", "Chicken Broth"],
      sauce: ["Turmeric", "Garlic", "Onion"],
    },
    directions: [
      {
        id: 1,
        title: "Sautéing",
        description: "Tumis bawang putih dan ayam hingga berubah warna.",
        image: "/images/cooking-step.jpg",
      },
    ],
  },
  {
    id: 9,
    title: "The Creamiest Creamy Chicken and Bacon Pasta",
    slug: "the-creamiest-creamy-chicken-and-bacon-pasta",
    image: "/photo/hr8.png",
    time: "30 Minutes",
    category: "Noodles",
    author: "Andreas Paula",
    date: "01 October 2022",
    prepTime: "15 Minutes",
    cookTime: "15 Minutes",
    description:
      "Pasta super creamy dengan potongan ayam panggang dan bacon sapi yang renyah.",
    nutrition: {
      calories: "620 kcal",
      fat: "38 g",
      protein: "25 g",
      carbs: "45 g",
      cholesterol: "110 mg",
    },
    ingredients: {
      main: ["Penne Pasta", "Chicken breast", "Beef Bacon"],
      sauce: ["Heavy Cream", "Parmesan Cheese", "Parsley"],
    },
    directions: [
      {
        id: 1,
        title: "Boiling",
        description: "Rebus pasta hingga al dente (tidak terlalu lunak).",
        image: "/images/cooking-step.jpg",
      },
    ],
  },
];
