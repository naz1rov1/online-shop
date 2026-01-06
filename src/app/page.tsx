"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../app/services/products";
import Link from "next/link";

const HomePage: React.FC = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <p className="text-2xl font-semibold mb-5">Mahsulotlar</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.products.map((product: any) => (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            className="block bg-white border rounded-lg shadow hover:shadow-lg transition duration-200 cursor-pointer"
          >
         
            <div className="w-full h-44 overflow-hidden flex items-center justify-center bg-gray-50 rounded-t-lg">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="object-contain h-full"
              />
            </div>

            <div className="p-3">
              <h2 className="text-sm font-semibold line-clamp-2">
                {product.title}
              </h2>

              <span className="inline-block mt-1 px-2 py-0.5 text-xs text-white bg-purple-600 rounded">
                {product.category}
              </span>

              <p className="text-green-600 font-bold mt-2">${product.price}</p>

              <button className="mt-3 w-full py-1.5 bg-purple-600 text-white rounded text-sm hover:bg-purple-700 transition">
                Ertaga
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
