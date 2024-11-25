import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { toggleList } from "../redux/slices/listOpenSlice";
import ListIcon from "@mui/icons-material/List";

export default function CategoriesButton() {
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => {
    dispatch(toggleList());
  };
  return (
    <IconButton
      size="large"
      aria-label="show 4 new mails"
      color="inherit"
      onClick={handleClick}
    >
      <ListIcon />
    </IconButton>
  );
}
