import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../react-query/queries/products/types";
import { RootState } from "../store";

export interface IShoppingCartState {
  itemsInCart: Product[];
}

const initialState: IShoppingCartState = {
  itemsInCart: [],
};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<Product>) => {
      state.itemsInCart = state.itemsInCart.includes(action.payload)
        ? [...state.itemsInCart]
        : [...state.itemsInCart, action.payload];
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      state.itemsInCart = state.itemsInCart.filter(
        (item) => item._id !== action.payload
      );
    },
    clearCartItems: (state) => {
      state.itemsInCart = [];
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearCartItems } =
  shoppingCartSlice.actions;

export const ShoppingCartState = (state: RootState) => state;

export default shoppingCartSlice.reducer;
