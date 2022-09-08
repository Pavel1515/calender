import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  date: "",
};

export const addPostSlice = createSlice({
  name: "add",
  initialState,
  reducers: {
    setDate: (state, actions) => {
      state.date = actions.payload;
    },
  },
});

export const { setDate } = addPostSlice.actions;

export default addPostSlice.reducer;
