const BASE_URL = "http://localhost:3000/api";

export const API = {
  products: {
    fetchProducts: `${BASE_URL}/products`,
    fetchProduct: (id: string) => `${BASE_URL}/products/${id}`,
  },
};
