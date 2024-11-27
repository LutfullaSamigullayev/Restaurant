import { Box, Divider, Drawer, IconButton, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { toggleList } from "../redux/slices/listOpenSlice";
import Categories from "./Categories";
import CancelIcon from "@mui/icons-material/Cancel";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";

export default function CategoriesDrawer() {
  const dispatch = useDispatch<AppDispatch>();
  const isListOpen = useSelector((state: RootState) => state.list.isListOpen);

  const toggleDrawer = () => {
    dispatch(toggleList());
  };

  return (
    <Drawer anchor="left" open={isListOpen} onClose={toggleDrawer}>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
            paddingRight: 1,
          }}
        >
          <RestaurantMenuIcon />
          <Typography variant="h6" noWrap component="div">
            5 Items
          </Typography>
        </Box>
        <IconButton
          size="large"
          aria-label="show 4 new mails"
          color="inherit"
          onClick={toggleDrawer}
        >
          <CancelIcon />
        </IconButton>
      </Box>
      <Divider />

      <Categories />
    </Drawer>
  );
}
