import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../redux/slices/cartOpenSlice";
import { AppDispatch, RootState } from "../redux/store";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import { IconButton, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

export default function Cart() {
  const dispatch = useDispatch<AppDispatch>();
  const isCartOpen = useSelector((state: RootState) => state.cart.isCartOpen);

  const toggleDrawer = () => {
    dispatch(toggleCart());
  };

  return (
    <Drawer anchor="right" open={isCartOpen} onClose={toggleDrawer}>
      <Box sx={{ width: 250 }} role="presentation">
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
              5Items
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
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
