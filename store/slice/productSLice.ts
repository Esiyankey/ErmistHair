import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Products {
  productId: string;
  productName: string;
  category: string;
  productPrice: number;
  hairType: string;
  hairColor: string;
  hairLength: string;
  productImage: string;
}

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "http://localhost:3030/api/v1/product/getAllProducts"
      ); 

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();
      return data; // ✅ Return parsed JSON
    } catch (error) {
      return rejectWithValue((error as Error).message); // ✅ Handle errors properly
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [] as Products[],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        console.log("Fetched products:", action.payload);
        state.loading = false;
        state.products = action.payload.data || []; // Extract products array
      }).addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default productSlice.reducer;
