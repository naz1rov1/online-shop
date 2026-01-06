// app/product/[id]/page.tsx
"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { getProductById } from "../../services/products"; 

const ProductDetailPage: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const productId = Number(params.id);

  const { data: product, isLoading, isError } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProductById(productId),
    enabled: !!productId,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-purple-600"></div>
      </div>
    );
  }

  if (isError || !product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl">Mahsulot topilmadi</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <button
        onClick={() => router.back()}
        className="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        Orqaga
      </button>

      <div className="flex flex-col md:flex-row gap-6">
     
        <div className="flex-1 bg-gray-50 rounded-lg flex items-center justify-center p-4">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="object-contain max-h-96"
          />
        </div>

   
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <span className="inline-block mb-2 px-3 py-1 text-xs text-white bg-purple-600 rounded">
            {product.category}
          </span>
          <p className="text-green-600 font-bold text-xl mb-4">${product.price}</p>
          <p className="mb-4">{product.description}</p>

          <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">
            Savatga qo'shish
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
