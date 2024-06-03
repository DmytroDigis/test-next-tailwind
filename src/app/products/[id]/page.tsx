import { fetchProduct } from "@/lib/product";
import { PageContainer, Title } from "@/components";

type ProductPageProps = {
  params: { id: string };
};

const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await fetchProduct(params.id);

  if (!product) {
    return (
      <PageContainer>
        <Title>Product not found</Title>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-64 md:h-96 object-cover mb-4 md:mb-0"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-xl text-gray-700 mb-4">${product.price}</p>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="flex items-center mb-4">
            <span className="text-gray-700 mr-2">Rating:</span>
            <span className="text-yellow-500">{product.rating} / 5</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-gray-700 mr-2">Stock:</span>
            <span className={`text-${product.stock > 0 ? "green" : "red"}-500`}>
              {product.stock > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </div>
          <div className="mb-4">
            <span className="text-gray-700">Category: </span>
            <span className="text-blue-500">{product.category}</span>
          </div>
          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </PageContainer>
  );
};

export default ProductPage;
