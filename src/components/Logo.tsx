import { Box, Typography } from "@mui/material";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";

export default function Logo() {
  return (
    <Box
      sx={{ display: "flex", gap: 1, alignItems: "center", paddingRight: 1 }}
    >
      <RestaurantMenuIcon />
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        Restaurant
      </Typography>
    </Box>
  );
}
