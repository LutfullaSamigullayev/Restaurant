import { Axios } from "@/lib/axios";
import { useQuery } from "react-query";
import { CardProduct, SearchInput } from "./components";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { ProductItem } from "@/types";

const fetchProducts = async () => {
  const { data } = await Axios.get("/products");
  return data;
};

export const Products = () => {
  const { data, error, isLoading } = useQuery("products", fetchProducts);
  const selectedKey = useSelector((state: RootState) => state.menu.selectedKey);
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  // ------------ search start ------------
  const [query, setQuery] = useState("");
  const handleQueryChange = (newQuery: string) => {
    setQuery(newQuery);
  };
  // ------------ search end ------------

  useEffect(() => {
    if (data) {
      const filtered = data.filter((product: any) => {
        const matchesCategory =
          selectedKey === "all" || product.category === selectedKey;
        const matchesQuery =
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase());
        return matchesCategory && matchesQuery;
      });
      setFilteredProducts(filtered);
    }
  }, [query, selectedKey, data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;



  return (
    <div>
      <SearchInput query={query} onQueryChange={handleQueryChange} />
      <ul className="flex flex-wrap gap-8">
        {filteredProducts.map((product: ProductItem) => (
          <li key={product.id}>
            <CardProduct {...product}  />
          </li>
        ))}
      </ul>
    </div>
  );
};
