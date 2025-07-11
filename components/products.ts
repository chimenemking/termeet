// data/products.ts
export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    description: string;
    details: string[];
    image: string;
  }
  
  export const products: Product[] = [
    {
      id: 1,
      name: "Classic Minimalist",
      category: "Dress",
      price: 299,
      description: "A timeless design for everyday elegance.",
      details: ["Stainless Steel Case", "Sapphire Crystal", "Swiss Quartz Movement"],
      image: "/images/watch-1.jpg", // Replace with your image
    },
    {
      id: 2,
      name: "Urban Chronograph",
      category: "Sport",
      price: 349,
      description: "Robust and stylish, perfect for the modern adventurer.",
      details: ["Chronograph Function", "Water Resistant", "Leather Strap"],
      image: "/images/watch-2.jpg", // Replace with your image
    },
    {
      id: 3,
      name: "Elegant Slimline",
      category: "Dress",
      price: 399,
      description: "Ultra-thin design with a sophisticated touch.",
      details: ["Ultra-thin Case", "Minimalist Dial", "Italian Leather Strap"],
      image: "/images/watch-3.jpg", // Replace with your image
    },
    {
      id: 4,
      name: "Sporty Dive Watch",
      category: "Sport",
      price: 449,
      description: "Durable and functional for underwater exploration.",
      details: ["Dive Bezel", "High Water Resistance", "Stainless Steel Bracelet"],
      image: "/images/watch-4.jpg", // Replace with your image
    },
  ];
  
  export const categories = ["All", "Dress", "Sport"];