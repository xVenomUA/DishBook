"use client";
import Image from "next/image";
import burgerImg from "../../../assets/burger.jpg";
import curryImg from "../../../assets/curry.jpg";
import dumplingsImg from "../../../assets/dumplings.jpg";
import macncheeseImg from "../../../assets/macncheese.jpg";
import pizzaImg from "../../../assets/pizza.jpg";
import schnitzelImg from "../../../assets/schnitzel.jpg";
import tomatoSaladImg from "../../../assets/tomato-salad.jpg";
import { useEffect, useState } from "react";

const images = [
  { image: burgerImg, alt: "A delicious, juicy burger" },
  { image: curryImg, alt: "A delicious, spicy curry" },
  { image: dumplingsImg, alt: "Steamed dumplings" },
  { image: macncheeseImg, alt: "Mac and cheese" },
  { image: pizzaImg, alt: "A delicious pizza" },
  { image: schnitzelImg, alt: "A delicious schnitzel" },
  { image: tomatoSaladImg, alt: "A delicious tomato salad" },
];

export default function ImageSlideShow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden">
      {images.map((img, index) => (
        <Image
          key={index}
          src={img.image}
          alt={img.alt}
          className={`w-full h-full object-cover absolute top-0 left-0 transform transition-all duration-700 ease-in-out ${
            currentImageIndex === index
              ? "opacity-100 z-10 transform scale-100 translate-x-0 rotate-0"
              : "opacity-0 -translate-x-4 -rotate-5 scale-110"
          }`}
        />
      ))}
    </div>
  );
}
