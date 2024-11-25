import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { toggleList } from "../redux/slices/listOpenSlice";
import CancelIcon from "@mui/icons-material/Cancel";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";

export default function Categories() {
  const dispatch = useDispatch<AppDispatch>();
  const isListOpen = useSelector((state: RootState) => state.list.isListOpen);

  const toggleDrawer = () => {
    dispatch(toggleList());
  };

  return (
    <Drawer anchor="left" open={isListOpen} onClose={toggleDrawer}>
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
