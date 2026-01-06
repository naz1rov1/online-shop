import { api } from "@/lib/axios";
import { ProductsResponse, Product } from "@/types/product";

export const getProducts = async (): Promise<ProductsResponse> => {
  const res = await api.get("/products");
  return res.data;
};

export const getProductById = async (id: number): Promise<Product> => {
  const res = await api.get(`/products/${id}`);
  return res.data;
};
