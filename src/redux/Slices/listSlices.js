import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listMouth: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  listDay: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {},
});

export const {} = listSlice.actions;

export default listSlice.reducer;
