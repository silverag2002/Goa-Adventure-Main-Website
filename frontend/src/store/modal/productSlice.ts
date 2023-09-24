import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: null,
  product_id: null,
  actualPrice: null,
  priceToBePaid: null,
  quantity: null,
  toDate: null,
  fromDate: null,
  deposit_value: null,
};

const productSlice = createSlice({
  name: "loginUserModal",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      console.log("ACTION VALUE", action);
      return {
        title: action.payload.title,
        product_id: action.payload.product_id,
        actualPrice: action.payload.actualPrice,
        priceToBePaid: action.payload.priceToBePaid,
        quantity: action.payload.quantity,
        toDate: action.payload.toDate,
        fromDate: action.payload.fromDate,
        deposit_value: action.payload.deposit_value,
      };
    },
    removeProduct: (state, action) => initialState,
  },
});

export const { addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;
