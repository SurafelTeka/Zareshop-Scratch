export interface Product {
  id: number;
  name: string;
  price: string;
  minOrder: string;
  supplier: string;
  years: string;
  country: string;
  image: string;
  verified: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Dolce & Gabbana The One Perfume",
    price: "2,500 ETB",
    minOrder: "1 piece",
    supplier: "Zare Fragrance Store",
    years: "3 yrs",
    country: "ET",
    image: "https://d64gsuwffb70l.cloudfront.net/684ec8cbd778b5af2d6cb1f6_1750190283639_d6094c70.png",
    verified: true
  },
  {
    id: 2,
    name: "Vans Old Skool Black Sneakers",
    price: "3,200 ETB",
    minOrder: "1 pair",
    supplier: "Zare Shoe Collection",
    years: "2 yrs",
    country: "ET",
    image: "https://d64gsuwffb70l.cloudfront.net/684ec8cbd778b5af2d6cb1f6_1750190286295_e335f42f.jpeg",
    verified: true
  },
  {
    id: 3,
    name: "FILA Navy Blue T-Shirt",
    price: "850 ETB",
    minOrder: "1 piece",
    supplier: "Zare Fashion Hub",
    years: "4 yrs",
    country: "ET",
    image: "https://d64gsuwffb70l.cloudfront.net/684ec8cbd778b5af2d6cb1f6_1750190287352_a89a0bac.jpg",
    verified: true
  },
  {
    id: 4,
    name: "Vintage Denim Jeans",
    price: "1,800 ETB",
    minOrder: "1 piece",
    supplier: "Zare Denim Co.",
    years: "5 yrs",
    country: "ET",
    image: "https://d64gsuwffb70l.cloudfront.net/684ec8cbd778b5af2d6cb1f6_1750190288700_cecd0712.jpg",
    verified: true
  },
  {
    id: 5,
    name: "ASUS VivoBook Laptop",
    price: "45,000 ETB",
    minOrder: "1 piece",
    supplier: "Zare Electronics",
    years: "6 yrs",
    country: "ET",
    image: "https://d64gsuwffb70l.cloudfront.net/684ec8cbd778b5af2d6cb1f6_1750190290855_f9d21245.jpg",
    verified: true
  },
  {
    id: 6,
    name: "Electric Hot Plate Cooker",
    price: "1,200 ETB",
    minOrder: "1 piece",
    supplier: "Zare Home Appliances",
    years: "3 yrs",
    country: "ET",
    image: "https://d64gsuwffb70l.cloudfront.net/684ec8cbd778b5af2d6cb1f6_1750190294180_3f698df0.jpg",
    verified: true
  },
  {
    id: 7,
    name: "Traditional Ethiopian Dress",
    price: "2,800 ETB",
    minOrder: "1 piece",
    supplier: "Zare Traditional Wear",
    years: "7 yrs",
    country: "ET",
    image: "https://d64gsuwffb70l.cloudfront.net/684ec8cbd778b5af2d6cb1f6_1750190295942_61326eac.png",
    verified: true
  },
  {
    id: 8,
    name: "Black Face Mask Balaclava",
    price: "450 ETB",
    minOrder: "1 piece",
    supplier: "Zare Sports Gear",
    years: "2 yrs",
    country: "ET",
    image: "https://d64gsuwffb70l.cloudfront.net/684ec8cbd778b5af2d6cb1f6_1750190394894_3b785022.jpg",
    verified: true
  }
];