import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// state object has 1 property: sum, and 1 method that modifies it: add
const addSlice = createSlice({
  name: "add",
  initialState: { sum: 0 },
  reducers: {
    add: (state, action: PayloadAction<{a: number; b: number}>) => {
      state.sum = action.payload.a + action.payload.b;
    },
  },
});
export const { add } = addSlice.actions;
export default addSlice.reducer;