import Link from "next/link";
import { Product } from "@/types";

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link
      href={`/products/${product.id}`}
      className="block p-4 bg-white rounded shadow hover:shadow-lg transition"
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover mb-4"
      />
      <h2 className="text-xl font-semibold">{product.title}</h2>
      <p className="text-gray-600">${product.price}</p>
    </Link>
  );
};
