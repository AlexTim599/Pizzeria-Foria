import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzasStatus',
  async ({ categoryId, sort }) => {
    const response = await axios.get(
      `https://62aa24433b3143855442d35b.mockapi.io/items?${
        categoryId > 0 ? `category=${categoryId}` : ''
      }&sortBy= ${sort.sortProperty}&order=desc`,
    );

    return response.data;
  },
);

const initialState = {
  items: [],
  status: null,
};

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.status = 'succeeded';

        state.items = action.payload;
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const getPizzasSelector = (state) => state.pizza;

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
