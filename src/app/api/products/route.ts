import { NextResponse } from "next/server";
import products from "../../../../public/products.json";
import { Product } from "@/types";

export async function GET(): Promise<NextResponse<{ products: Product[] }>> {
  return NextResponse.json({ products: products as Product[] });
}
