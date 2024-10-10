import React from "react";
import ProductCard from "./ProductCard";

const productsData = [
  {
    img: "/cort2.jpeg",
    title: "girls card",
    desc: "WOMENS WINTER COAT",
    rating: 3,
    price: "200",
  },
  {
    img: "/overcoad.jpeg",
    title: "girls coat",
    desc: "WOMENS COAT",
    rating: 3,
    price: "1000",
  },
  {
    img: "/shose2.jpg",
    title: "men shoes",
    desc: "WOMENS SHOES",
    rating: 3,
    price: "2000",
  },
  {
    img: "/watch1.jpeg",
    title: "girls watch",
    desc: "WOMENS WATCH",
    rating: 3,
    price: "700",
  },
  {
    img: "/cort1.png",
    title: "girls shoes",
    desc: "WOMENS COAT",
    rating: 3,
    price: "2000",
  },
  {
    img: "/shose1.jpg",
    title: "girls shoes",
    desc: "WOMENS SHOES",
    rating: 3,
    price: "1200",
  },
];

const NewProducts = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {productsData.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc} 
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
