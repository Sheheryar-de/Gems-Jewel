"use client";
import { useState } from "react";

const Shop = () => {
  const [selectedCategories, setSelectedCategories] = useState([
    "All Categories",
  ]);

  const handleCategoryChange = (category) => {
    setSelectedCategories([category]);
  };

  const filteredImages =
    selectedCategories.includes("All Categories") ||
    selectedCategories.length === 0
      ? imgArr
      : imgArr.filter((item) => selectedCategories.includes(item.category));

  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="background flex flex-col items-center md:items-start justify-center md:pl-15">
        <h1 className="text-xl md:text-3xl font-bold text-white">
          Browse Our Categories
        </h1>
        <p className="text-white text-lg">
          Find the perfect items for your needs
        </p>
      </div>
      <div className="md:flex items-start  mb-10 mt-4">
        <div className="min-w-[300px] p-8 h-auto">
          <h1 className="text-2xl font-semibold">Categories</h1>
          <div className="flex md:flex-col flex-wrap gap-2">
            {arr.map((item) => (
              <div
                key={item.id}
                onChange={() => handleCategoryChange(item.name)}
                className="flex items-center gap-1 border-t-[1px] border-gray-300 mt-5 pt-3"
              >
                <input
                  type="checkbox"
                  onChange={() => handleCategoryChange(item.name)}
                  checked={selectedCategories.includes(item.name)}
                />
                <p className="cursor-default">{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
          {filteredImages.map((item) => (
            <div key={item.id}>
              <img
                src={item.src}
                alt={item.alt}
                className="h-auto max-w-full rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;

const imgArr = [
  {
    id: 1,
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
    alt: "image",
    category: "Earings",
  },
  {
    id: 2,
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
    alt: "image",
    category: "Sets",
  },
  {
    id: 3,
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
    alt: "image",
    category: "Rings",
  },
  {
    id: 4,
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
    alt: "image",
    category: "Pendents",
  },
  {
    id: 5,
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
    alt: "image",
    category: "Bracelets",
  },
  {
    id: 6,
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg",
    alt: "image",
    category: "Bangles",
  },
  {
    id: 7,
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
    alt: "image",
    category: "Others",
  },
];

const arr = [
  {
    id: 1,
    name: "All Categories",
  },
  {
    id: 2,
    name: "Earings",
  },
  {
    id: 3,
    name: "Sets",
  },
  {
    id: 4,
    name: "Pendents",
  },
  {
    id: 5,
    name: "Rings",
  },
  {
    id: 6,
    name: "Bracelets",
  },
  {
    id: 7,
    name: "Bangles",
  },
  {
    id: 8,
    name: "Others",
  },
];
