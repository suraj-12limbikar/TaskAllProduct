import { Container } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectProducts,
  selectCard,
  addCard,
} from "../app/Slice/shoppingSlice";
import Card from "@mui/material/Card";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Button from "@mui/material/Button";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Product = ({ id, price, image, colorId, materialId, name }) => {
  const dispatch = useDispatch();
  const card = useSelector(selectCard);
  let message = "Add To Card";
  if (card?.products?.some((pro) => pro.id == id)) message = "Added To Card";
  return (
    <div
      style={{
        width: 350,
        padding: 4,
        margin: 5,
      }}
    >
      <Card sx={{ padding: 1 }}>
        <img src={image} style={{ width: "100%", height: 400 }} alt="image" />
        <div
          align="center"
          style={{
            width: "100%",
            height: 60,
            fontSize: 15,
            fontStyle: "italic",
          }}
        >
          {id}-{name}
        </div>
        <h2 align="center">
          <CurrencyRupeeIcon />
          {price}
        </h2>

        <Button
          fullWidth
          style={{
            backgroundColor: "orange",
            padding: "10px",
            color: "#fff",
            borderRadius: 2,
          }}
          onClick={() => dispatch(addCard({ id: id }))}
        >
          <AddShoppingCartIcon />
          {message}
        </Button>
      </Card>
    </div>
  );
};

const ProductList = () => {
  const products = useSelector(selectProducts);
  return (
    <>
      <section
        style={{ display: "flex", flexWrap: "wrap", backgroundColor: "#aaa" }}
      >
        {Array.isArray(products) &&
          products.map((prod, i) => <Product key={i} {...prod} />)}
      </section>
    </>
  );
};

export default ProductList;
