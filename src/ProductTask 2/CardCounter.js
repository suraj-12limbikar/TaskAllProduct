import React from "react";
import { useSelector } from "react-redux";
import { selectCard } from "../app/Slice/shoppingSlice";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const CardCounter = () => {
  const length = useSelector(selectCard)?.products?.length;
  return (
    <>
      <Link to="/cart">
        <span style={{ backgroundColor: "#ccc", padding: 15, borderRadius: 5 }}>
          <AddShoppingCartIcon />
          {length}
        </span>
      </Link>
    </>
  );
};

export default CardCounter;
