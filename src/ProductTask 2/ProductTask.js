import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CardCounter from "./CardCounter";
import ProductList from "./ProductList";
import { loadProducts } from "./thunk-Product";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Card from "@mui/material/Card";
const ProductTask = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProducts());
  }, []);
  return (
    <>
      <section
        style={{ display: "flex", justifyContent: "space-around", padding: 5 }}
      >
        <Card sx={{ paddingLeft: 40, paddingRight: 40 }}>
          <h3>MYCOLOLSHOP.COM</h3>
        </Card>
      </section>
      <section
        style={{ display: "flex", justifyContent: "space-around", padding: 5 }}
      >
        <div style={{ paddingLeft: 40 }}>
          <h3>All Product</h3>
        </div>

        <CardCounter />
      </section>
      <Routes>
        <Route path="" element={<ProductList />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default ProductTask;
