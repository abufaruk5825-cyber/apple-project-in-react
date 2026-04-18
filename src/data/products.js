import iphon16pro from "../assets/iphon16pro.jpg";
import iphone16 from "../assets/iphone16.jpg";
import watch from "../assets/watch_hero.jpg";
import macbook from "../assets/hero_macbook_air_m3__cp4t7pn8zqaa_small_2x.jpg";
import mobile from "../assets/promo_iphone_tradein__bugw15ka691e_large_2x.jpg";
import promoApple from "../assets/promo_apple_card__5cm7draujpey_large_2x.jpg";
import bestPromo from "../assets/promo_apple_watch_unity__casvx9ysh1le_large_2x.jpg";
import airpods from "../assets/promo_airpods_4_avail__bl22kvpg6ez6_large_2x.jpg";

export const products = {
  iphone16pro: {
    name: "iPhone 16 Pro",
    image: iphon16pro,
    basePrice: 999,
    storages: ["128GB", "256GB", "512GB", "1TB"],
    prices: { "128GB": 999, "256GB": 1099, "512GB": 1299, "1TB": 1499 },
    colors: [
      { name: "Black Titanium", hex: "#2c2c2e" },
      { name: "White Titanium", hex: "#f5f5f0" },
      { name: "Natural Titanium", hex: "#c8b89a" },
      { name: "Desert Titanium", hex: "#c4a882" },
    ],
  },
  iphone16: {
    name: "iPhone 16",
    image: iphone16,
    basePrice: 799,
    storages: ["128GB", "256GB", "512GB"],
    prices: { "128GB": 799, "256GB": 899, "512GB": 1099 },
    colors: [
      { name: "Black", hex: "#1c1c1e" },
      { name: "White", hex: "#f5f5f7" },
      { name: "Pink", hex: "#f2a7b0" },
      { name: "Teal", hex: "#5ac8c8" },
      { name: "Ultramarine", hex: "#3a5ba0" },
    ],
  },
  applewatch: {
    name: "Apple Watch Series 11",
    image: watch,
    basePrice: 399,
    storages: ["GPS", "GPS + Cellular"],
    prices: { "GPS": 399, "GPS + Cellular": 499 },
    colors: [
      { name: "Midnight", hex: "#1c1c1e" },
      { name: "Starlight", hex: "#f5f5f0" },
      { name: "Red", hex: "#ff3b30" },
      { name: "Blue", hex: "#007aff" },
    ],
  },
  macbook: {
    name: "MacBook Air M3",
    image: macbook,
    basePrice: 1099,
    storages: ["8GB RAM / 256GB", "8GB RAM / 512GB", "16GB RAM / 512GB"],
    prices: {
      "8GB RAM / 256GB": 1099,
      "8GB RAM / 512GB": 1299,
      "16GB RAM / 512GB": 1499,
    },
    colors: [
      { name: "Midnight", hex: "#1c1c1e" },
      { name: "Starlight", hex: "#f5f5f0" },
      { name: "Space Gray", hex: "#86868b" },
      { name: "Silver", hex: "#e0e0e0" },
    ],
  },
  tradein: {
    name: "iPhone Trade In",
    image: mobile,
    basePrice: 0,
    storages: [],
    colors: [],
  },
  iphonebest: {
    name: "iPhone Best",
    image: promoApple,
    basePrice: 999,
    storages: ["128GB", "256GB", "512GB", "1TB"],
    prices: { "128GB": 999, "256GB": 1099, "512GB": 1299, "1TB": 1499 },
    colors: [
      { name: "Black Titanium", hex: "#2c2c2e" },
      { name: "White Titanium", hex: "#f5f5f0" },
      { name: "Natural Titanium", hex: "#c8b89a" },
      { name: "Desert Titanium", hex: "#c4a882" },
    ],
  },
  modernwatch: {
    name: "Modern Watch",
    image: bestPromo,
    basePrice: 399,
    storages: ["GPS", "GPS + Cellular"],
    prices: { "GPS": 399, "GPS + Cellular": 499 },
    colors: [
      { name: "Midnight", hex: "#1c1c1e" },
      { name: "Starlight", hex: "#f5f5f0" },
      { name: "Red", hex: "#ff3b30" },
      { name: "Blue", hex: "#007aff" },
    ],
  },
  smartelectronics: {
    name: "AirPods 4",
    image: airpods,
    basePrice: 129,
    storages: ["Standard", "With Active Noise Cancellation"],
    prices: { "Standard": 129, "With Active Noise Cancellation": 179 },
    colors: [
      { name: "White", hex: "#f5f5f7" },
    ],
  },
};
