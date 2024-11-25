import Grid from "@mui/material/Grid2";
import ProductCard from "./productCard";

export default function ResponsiveGrid() {
  return (
    <Grid
      container
      spacing={{ xs: 1, md: 4 }}
      columns={{ xs: 4, sm: 8, md: 18 }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {Array.from(Array(26)).map((_, index) => (
        <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
          <ProductCard />
        </Grid>
      ))}
    </Grid>
  );
}
