import { PageContainer, ProductCard, Title } from "@/components";
import { fetchProducts } from "@/lib/product";

const HomePage = async () => {
  const products = await fetchProducts();

  return (
    <PageContainer>
      <Title>Products</Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </PageContainer>
  );
};

export default HomePage;
