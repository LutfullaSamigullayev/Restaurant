import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Box } from "@mui/material";
import { ProductItem } from "../types";

export default function ProductCard({
  name,
  price,
  category,
  image,
  description,
}: ProductItem) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={image} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {category}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
      <Box>
        <Typography gutterBottom variant="h5" component="div">
          {price}
        </Typography>
        <CardActions>
          <Button
            size="large"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              border: "1px solid",
              borderRadius: "30px",
            }}
          >
            <ShoppingBasketIcon />
            Cart
          </Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Box>
    </Card>
  );
}
