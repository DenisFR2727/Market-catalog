import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchedTovars = createAsyncThunk(
    "tovars/fetchTovars",
    async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products"
      );
      return await response.json();
    }
  );

export const createTovar = createAsyncThunk(
    "tovars/createTovar",
    async (tovar) => {
      const response = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tovar),
      });
      return await response.json();
    }
  );