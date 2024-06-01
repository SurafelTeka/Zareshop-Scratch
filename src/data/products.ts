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
    name: "High Quality Fishing Sunglasses UV400 Outdoor Sport Logo Custom",
    price: "$5",
    minOrder: "600 pieces",
    supplier: "Wenzhou Lenloo Optical Co., Ltd.",
    years: "6 yrs",
    country: "CN",
    image: "https://d64gsuwffb70l.cloudfront.net/684ec8cbd778b5af2d6cb1f6_1750186718332_eb810c3a.png",
    verified: true
  },
  {
    id: 2,
    name: "Hot Dipped/Cold Rolled JIS ASTM DX51D SGCC GI Steel Coil 0.12MM",
    price: "$458.75-495.88",
    minOrder: "5 tons",
    supplier: "Shandong Gangbang Steel Co., Ltd.",
    years: "7 yrs",
    country: "CN",
    image: "https://d64gsuwffb70l.cloudfront.net/684ec8cbd778b5af2d6cb1f6_1750187369207_bd76d3c6.png",
    verified: true
  },
  {
    id: 3,
    name: "Whole Sale 3l Stainless Steel Household Large Meat Meat S Fo",
    price: "$3.10-5",
    minOrder: "1 piece",
    supplier: "Guangzhou Cooking Utensils Co., Ltd.",
    years: "5 yrs",
    country: "CN",
    image: "https://d64gsuwffb70l.cloudfront.net/684ec8cbd778b5af2d6cb1f6_1750186718332_eb810c3a.png",
    verified: true
  },
  {
    id: 4,
    name: "Multifunctional Patch Phone Lanyards Polyester Custom Logo",
    price: "$0.50-0.60",
    minOrder: "100 pieces",
    supplier: "Dongguan Fuding Weaving Co., Ltd.",
    years: "3 yrs",
    country: "CN",
    image: "https://d64gsuwffb70l.cloudfront.net/684ec8cbd778b5af2d6cb1f6_1750187369207_bd76d3c6.png",
    verified: false
  },
  {
    id: 5,
    name: "Wireless Bluetooth Earphones TWS 5.0 Stereo Sound",
    price: "$12.50-18.90",
    minOrder: "50 pieces",
    supplier: "Shenzhen Tech Electronics Ltd.",
    years: "4 yrs",
    country: "CN",
    image: "https://d64gsuwffb70l.cloudfront.net/684ec8cbd778b5af2d6cb1f6_1750186718332_eb810c3a.png",
    verified: true
  },
  {
    id: 6,
    name: "Smart Watch Fitness Tracker Heart Rate Monitor",
    price: "$25.00-35.00",
    minOrder: "20 pieces",
    supplier: "Guangdong Smart Devices Co.",
    years: "6 yrs",
    country: "CN",
    image: "https://d64gsuwffb70l.cloudfront.net/684ec8cbd778b5af2d6cb1f6_1750187369207_bd76d3c6.png",
    verified: true
  },
  {
    id: 7,
    name: "LED Strip Lights RGB Color Changing Remote Control",
    price: "$8.90-15.60",
    minOrder: "10 pieces",
    supplier: "Zhongshan Lighting Solutions Ltd.",
    years: "8 yrs",
    country: "CN",
    image: "https://d64gsuwffb70l.cloudfront.net/684ec8cbd778b5af2d6cb1f6_1750186718332_eb810c3a.png",
    verified: true
  },
  {
    id: 8,
    name: "Portable Power Bank 20000mAh Fast Charging USB-C",
    price: "$18.50-28.00",
    minOrder: "30 pieces",
    supplier: "Shenzhen Power Tech Co., Ltd.",
    years: "5 yrs",
    country: "CN",
    image: "https://d64gsuwffb70l.cloudfront.net/684ec8cbd778b5af2d6cb1f6_1750187369207_bd76d3c6.png",
    verified: true
  }
];