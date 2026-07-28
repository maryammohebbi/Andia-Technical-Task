"use client";

import { useProducts } from "@/hooks/useProducts";
import Loading from "@/ui/Loading";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";
import { BsBoxSeam } from "react-icons/bs";

function ProductsList({ search }) {
  const { products, isLoading, isError, error } = useProducts();

  if (isLoading) return <Loading />;

  if (isError) {
    return toast.error(error.message);
  }

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex gap-5 flex-wrap items-center justify-between select-none">
      {filteredProducts.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}

export default ProductsList;

function ProductCard({ product }) {
  return (
    <div
      className="w-full sm:w-36 md:w-40 lg:w-44 h-80 flex flex-col items-center justify-between cursor-pointer p-2
              border border-gray-200 rounded-2xl hover:scale-105 translate-0 duration-500 shadow-2xl"
    >
      <Image
        src={product.image}
        width={100}
        height={200}
        alt={product.title}
        className="h-[50%]"
      />
      <div className="flex flex-col justify-between h-[40%]">
        <span className="text-xs text-gray-600 w-full">{product.title}</span>
        <div className="flex items-center justify-between border-t border-gray-300 py-2 ">
          <span className="text-xs text-[#00A86B] border-r border-gray-400 w-[50%]">
            ${product.price}
          </span>
          <span className="text-[10px] text-gray-600 flex items-center gap-x-1">
            <BsBoxSeam className="w-3 h-3" /> {product.rating.count} in stock
          </span>
        </div>
      </div>
    </div>
  );
}
