import { createSlice } from "@reduxjs/toolkit";

// export type HelloMsg = { message: string;}

// wrap the full shape of the state object in the initialState field
// here there are no methods in reducers
const helloSlice = createSlice({
  name: "hello",
  initialState: { message: "Hello Redux" },
  reducers: {},
});

// to be imported by a EnhancedStore
export default helloSlice.reducer;