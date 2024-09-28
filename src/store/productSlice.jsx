import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProducts(state, action) {
      state.data = action.payload; // This will now receive the resolved data
    },
  },
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

// Thunk for fetching products
export function getProducts() {
  // An asynchronous thunk function is a function that allows developers to handle asynchronous actions in Redux, a JavaScript state management system.
  return async function getProductsThunk(dispatch) {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const result = await response.json(); // Await the result here
      dispatch(fetchProducts(result)); // Dispatch the resolved data, not the promise
    } catch (error) {
      console.error('Failed to fetch products:', error);
      // Optionally dispatch an error action or handle errors here
    }
  };
}
