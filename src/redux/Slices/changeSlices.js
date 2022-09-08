import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  changeKey: "",
};

export const changeSlice = createSlice({
  name: "change",
  initialState,
  reducers: {
    setChangeKey: (state, actions) => {
      state.changeKey = actions.payload;
    },
  },
});

export const { setChangeKey } = changeSlice.actions;

export default changeSlice.reducer;
