import { createContext, ReactElement, useState, useEffect } from "react";

export type ProductsType = {
  sku: string;
  name: string;
  price: number;
  imageSrc: string;
};

const initState: ProductsType[] = [];

export type UseProductsContextType = {
  products: ProductsType[];
};

const initContextState: UseProductsContextType = { products: [] };

const ProductsContext = createContext<UseProductsContextType>(initContextState);

type ChildrenType = {
  children?: ReactElement | ReactElement[];
};

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductsType[]>(initState);

  useEffect(() => {
    const getProducts = async (): Promise<ProductsType[]> => {
      const fetchProducts = await fetch("http://localhost:5000/products")
        .then((res) => {
          return res.json();
        })
        .catch((err) => {
          if (err instanceof Error) console.log(err.message);
        });

      return fetchProducts;
    };

    getProducts().then((products) => setProducts(products));
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
