const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

const products = [
  {
    title: "Weekly Organic Box",
    description: "Serves 2-3 people at peak ripeness. Sourced locally.",
    price: 799,
    subPrice: 719,
    rating: 4.8,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600",
    badge: { text: "Best Seller", type: "orange" },
    tags: ["PureBite", "Eco Friendly"],
    category: "Vegetables",
  },
  {
    title: "Juicing Essentials Box",
    description: "Serves 2-3 people for fresh morning smoothies and juices.",
    price: 649,
    subPrice: 585,
    rating: 4.9,
    reviews: 300,
    image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&q=80&w=600",
    badge: { text: "New", type: "green" },
    tags: ["PureBite", "Juicing"],
    category: "Organic Boxes",
  },
  {
    title: "Seasonal Harvest Box",
    description: "A full organic produce box harvested precisely at the right time.",
    price: 1199,
    subPrice: 899,
    rating: 4.7,
    reviews: 92,
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=600",
    badge: { text: "Limited", type: "orange" },
    tags: ["PureBite", "Seasonal"],
    category: "Organic Boxes",
  },
  {
    title: "Organic Fruit Box",
    description: "Seasonal fruits picked at the orchards perfectly ripe.",
    price: 549,
    subPrice: 495,
    rating: 4.9,
    reviews: 82,
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&q=80&w=600",
    badge: { text: "Limited", type: "blue" },
    tags: ["PureBite", "Family", "10%"],
    category: "Fruits",
  },
  {
    title: "Farm Fresh Organic Eggs",
    description: "One dozen pasture-raised, free-range organic brown eggs.",
    price: 149,
    subPrice: 135,
    rating: 4.9,
    reviews: 154,
    image: "https://images.unsplash.com/photo-1582234372722-50d7ccc30ebd?auto=format&fit=crop&q=80&w=600",
    badge: null,
    tags: ["Dairy", "Farm Fresh"],
    category: "Dairy & Eggs",
  },
  {
    title: "Whole Organic Milk",
    description: "Cold, fresh, pasteurized organic whole milk.",
    price: 95,
    subPrice: 85,
    rating: 4.8,
    reviews: 110,
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=600",
    badge: null,
    tags: ["Dairy", "Organic"],
    category: "Dairy & Eggs",
  },
  {
    title: "Green Detox Smoothie",
    description: "A blend of spinach, kale, apple, and ginger for a healthy start.",
    price: 189,
    subPrice: 169,
    rating: 4.9,
    reviews: 320,
    image: "https://images.unsplash.com/photo-1610970881699-44a5587cab32?auto=format&fit=crop&q=80&w=600",
    badge: { text: "Best Seller", type: "orange" },
    tags: ["Detox", "Vegan"],
    category: "Smoothies",
  },
  {
    title: "Berry Blast Smoothie",
    description: "Antioxidant-rich mixed berries swirled with organic yogurt.",
    price: 229,
    subPrice: 205,
    rating: 4.8,
    reviews: 245,
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=600",
    badge: null,
    tags: ["Antioxidant", "Berries"],
    category: "Smoothies",
  },
  {
    title: "Tropical Mango Smoothie",
    description: "Sweet mango, pineapple, and coconut water blend.",
    price: 249,
    subPrice: 225,
    rating: 4.7,
    reviews: 180,
    image: "https://images.unsplash.com/photo-1598428914278-d0adcf296e62?auto=format&fit=crop&q=80&w=600",
    badge: { text: "Summer", type: "green" },
    tags: ["Tropical", "Refreshing"],
    category: "Smoothies",
  },
  {
    title: "Protein Chocolate Smoothie",
    description: "Rich cacao powder, bananas, and pea protein.",
    price: 299,
    subPrice: 269,
    rating: 4.9,
    reviews: 412,
    image: "https://images.unsplash.com/photo-1563227448-9366fa2eb5df?auto=format&fit=crop&q=80&w=600",
    badge: null,
    tags: ["Protein", "Post-Workout"],
    category: "Smoothies",
  },
  {
    title: "Strawberry Banana Classic",
    description: "The timeless combination of ripe strawberries and bananas.",
    price: 179,
    subPrice: 159,
    rating: 4.8,
    reviews: 512,
    image: "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&q=80&w=600",
    badge: null,
    tags: ["Classic", "Kids Love"],
    category: "Smoothies",
  },
  {
    title: "Sunshine Citrus Blend",
    description: "Oranges, grapefruit, and a hint of turmeric for immunity.",
    price: 199,
    subPrice: 179,
    rating: 4.6,
    reviews: 95,
    image: "https://images.unsplash.com/photo-1622597467836-f38240662c82?auto=format&fit=crop&q=80&w=600",
    badge: { text: "Immunity", type: "blue" },
    tags: ["Vitamin C", "Citrus"],
    category: "Smoothies",
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected for seeding');

    await Product.deleteMany({});
    console.log('🗑️  Cleared existing products');

    await Product.insertMany(products);
    console.log('🌱 Database Seeded!');

    mongoose.disconnect();
  } catch (err) {
    console.error('❌ Seeding Error:', err);
    process.exit(1);
  }
};

seedDB();
