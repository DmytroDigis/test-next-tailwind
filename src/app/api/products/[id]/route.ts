import { NextRequest, NextResponse } from "next/server";
import products from "../../../../../public/products.json";
import { Product } from "@/types";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const id = url.pathname.split("/").pop();
  const product = (products as Product[]).find(
    (p: Product) => p.id === parseInt(id as string),
  );

  if (product) {
    return NextResponse.json(product);
  } else {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }
}

