"use client";

import Card from "@/components/Card";
import Carosoul from "@/components/Carosoul";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-2xl">
      {/* header */}
      <Carosoul
        arr={carosoulArr}
        height="h-[500px]"
        className="w-full h-full object-cover object-top"
      />
      {/*Featured Products */}
      <div className="mt-16">
        <Header name={"Featured Products"} />
        <div className="flex items-center justify-around flex-wrap mt-10 gap-4 ">
          {cardArr.map((item) => (
            <Card
              key={item.id}
              src={item.src}
              name={item.name}
              amount={item.amount}
              rating={item.rating}
              maxStars={item.maxStars}
              isTrue={true}
              className="rounded-2xl h-[420px] object-cover"
            />
          ))}
        </div>
      </div>

      {/* latest products */}
      <div className="mb-16 flex flex-col items-center justify-center">
        <div className="mb-10">
          <Header name={"Latest Products"} />
        </div>
        <div className="w-full flex items-center justify-center gap-8 flex-wrap">
          {categoryArr.map((item) => (
            <Card
              key={item.id}
              src={item.src}
              name={item.name}
              text="text-center"
              className="w-full h-full object-center object-cover rounded-lg mx-auto transition delay-300 duration-400 ease-in-out hover:-translate-y-1 hover:scale-120"
            />
          ))}
        </div>
      </div>

      {/* our Collections */}
      <div className="mt-10 mb-20 flex flex-col items-center justify-center">
        <div className="mb-10">
          <Header name={"Our Collections"} />
        </div>
        <div className="w-full flex items-center justify-center gap-8 flex-wrap">
          {categoryArr.map((item) => (
            <Card
              key={item.id}
              src={item.src}
              name={item.name}
              text="text-center"
              className="w-full h-full object-center object-cover rounded-lg mx-auto transition delay-300 duration-400 ease-in-out hover:-translate-y-1 hover:scale-120"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const cardArr = [
  {
    id: 1,
    name: "Gems Necklace-0518",
    src: "https://i.pinimg.com/originals/b6/fa/c3/b6fac3303bde5b847ac14c93c87cc3d6.jpg",
    amount: "Rs.1500",
    rating: 4.5,
    maxStars: 5,
  },
  {
    id: 2,
    name: "Gems Necklace-0518",
    src: "https://tiimg.tistatic.com/fp/1/007/956/artificial-designer-necklace-set-for-party-wear-311.jpg",
    amount: "Rs.1500",
    rating: 4.5,
    maxStars: 5,
  },
  {
    id: 3,
    name: "Gems Necklace-0518",
    src: "https://rjkollection.com/cdn/shop/files/Artificial-Necklace-Set-RJ-Kollection-RJ-Kollection-177458_grande.webp?v=1722068249",
    amount: "Rs.1500",
    rating: 4.5,
    maxStars: 5,
  },
  {
    id: 4,
    name: "Gems Necklace-0518",
    src: "https://www.jewelsmart.in/media/catalog/product/cache/5e5d5507ad17a23dc9f1bc728eeab23c/s/h/short-and-chic-traditional-gold-necklace-design-jewelsmartt-4573.jpg",
    amount: "Rs.1500",
    rating: 4.5,
    maxStars: 5,
  },
  {
    id: 5,
    name: "Gems Necklace-0518",
    src: "https://www.kushals.com/cdn/shop/files/antique-necklace-gold-antique-necklace-165022-38582904193180.jpg?v=1717056990&width=1200",
    amount: "Rs.1500",
    rating: 4.5,
    maxStars: 5,
  },
  {
    id: 6,
    name: "Gems Necklace-0518",
    src: "https://static.wixstatic.com/media/b69f5d_b9f6e8c2bac64eb49856f2b4f1cf7c79~mv2.jpg/v1/fill/w_980,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b69f5d_b9f6e8c2bac64eb49856f2b4f1cf7c79~mv2.jpg",
    amount: "Rs.1500",
    rating: 3,
    maxStars: 5,
  },
  {
    id: 7,
    name: "Gems Necklace-0518",
    src: "https://sarafabazar.online/storage/products/159239021734-1-scaled-1-scaled-1-1.webp",
    amount: "Rs.1500",
    rating: 4.5,
    maxStars: 5,
  },
  {
    id: 8,
    name: "Gems Necklace-0518",
    src: "https://cdn.shopify.com/s/files/1/2436/4429/products/7920_NKER_1_2048x.jpg?v=1694175840",
    amount: "Rs.1500",
    rating: 4,
    maxStars: 5,
  },
];
const carosoulArr = [
  {
    id: 1,
    src: "https://static.tossdown.com/site/d1e8e0d5-aff2-4a2a-8d0c-a9bec6d60987.webp",
  },
  {
    id: 2,
    src: "https://static.tossdown.com/images/a268060d-7eb0-41a8-897d-4cf98cdeb0a2.webp",
  },
  {
    id: 3,
    src: "https://static.tossdown.com/site/af253b4b-bee0-42e4-b884-6e166e277c54.webp",
  },
  {
    id: 4,
    src: "https://static.tossdown.com/site/121614e8-056e-4c47-85d0-c23f8d1da21f.webp",
  },
];
const categoryArr = [
  {
    id: 1,
    name: "Earings",
    src: "https://i.pinimg.com/736x/ed/aa/61/edaa610fb866c2d3f3c582623a8cb057.jpg",
  },
  {
    id: 2,
    name: "Finger Rings",
    src: "https://www.afrogem.co.za/cdn/shop/files/TimelessBlackandWhiteDiamondHalfEternityRoseGoldBandLR1_1024x1024.jpg?v=1733113792",
  },
  {
    id: 3,
    name: "Necklace Sets",
    src: "https://www.forya.in/cdn/shop/files/GREEN_LOKESH_OXIDISED_NECKLACE_SET_2-Photoroom.jpg?v=1727175779",
  },
  {
    id: 4,
    name: "Bindiya & Jhumar",
    src: "https://meerzah.pk/cdn/shop/files/jh-1_1.jpg?v=1724834823",
  },
  {
    id: 5,
    name: "Bangles",
    src: "https://www.elarajewels.com.pk/wp-content/uploads/2024/12/ELARA-Jewels-Rani-Bangles-3.webp",
  },
  {
    id: 6,
    name: "Bridal Jewellery Sets",
    src: "https://nayabjewellery.com/cdn/shop/files/Madrasi-Zarcon-Double-Necklace-Bridal-set-2317-Nayab-Jewellery-20158494.jpg?v=1741469131",
  },
];
