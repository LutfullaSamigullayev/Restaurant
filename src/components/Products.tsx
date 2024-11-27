import Grid from "@mui/material/Grid2";
import ProductCard from "./productCard";
import { Axios } from "../lib/axios";
import { ProductItem } from "../types";
import { useQuery } from "@tanstack/react-query";
import { Box } from "@mui/material";
import Categories from "./Categories";

async function getProducts(): Promise<ProductItem[]> {
  const { data } = await Axios.get("/products");
  return data;
}

export default function ProductsPage() {
  const { data, isLoading, isError } = useQuery<ProductItem[]>({
    queryKey: ["products"], // Explicit queryKey
    queryFn: getProducts, // Fetcher function
  });

  return (
    <Box
      sx={{
        display: "flex",
        paddingTop: "80px",
      }}
    >
      <Box sx={{ width: "320px" }}>
        <Box position={"fixed"}>
          <Categories />
        </Box>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Grid
          container
          spacing={{ xs: 1, md: 4 }}
          columns={{ xs: 4, sm: 8, md: 18 }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {isLoading ? (
            <h3>Loading...</h3>
          ) : isError ? (
            <h3>Error</h3>
          ) : !data ? (
            <h3>No Product</h3>
          ) : (
            data.map((item: ProductItem, index: number) => (
              <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                <ProductCard {...item} />
              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </Box>
  );
}
