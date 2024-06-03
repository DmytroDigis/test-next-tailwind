import { Product } from "@/types";
import { API } from "@/constants";

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(API.products.fetchProducts);
  const data = await res.json();
  return data.products;
}

export async function fetchProduct(id: string): Promise<Product | null> {
  const res = await fetch(API.products.fetchProduct(id));
  if (!res.ok) {
    return null;
  }
  return res.json();
}
