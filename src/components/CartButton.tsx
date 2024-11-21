import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { toggleCart } from "../redux/slices/cartOpenSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";

export default function CartButton() {
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => {
    dispatch(toggleCart());
  };

  return (
    <IconButton
      size="large"
      aria-label="show 4 new mails"
      color="inherit"
      onClick={handleClick}
    >
      <Badge badgeContent={4} color="error">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
}
