import { AppBar, Box, Toolbar } from "@mui/material";
import CartButton from "./CartButton";
import CategoriesButton from "./CategoriesButton";

export default function Footer() {
  return (
    <Box sx={{ display: { xs: "flex", sm: "none" } }}>
      <AppBar position="fixed" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <CategoriesButton />
          <Box
            sx={{
              transform: "translateY(-22px)",
              background: "#1976D2",
              borderRadius: "100%",
              padding: "4px",
            }}
            color="primary"
          >
            <CartButton />
          </Box>
          <Box sx={{ width: "46px" }}></Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
