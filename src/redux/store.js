import { configureStore } from "@reduxjs/toolkit";
import addPost from "./Slices/addPostSlices";
import changeKey from "./Slices/changeSlices";
import lists from "./Slices/listSlices";
const store = configureStore({
  reducer: {
    addPost,
    changeKey,
    lists,
  },
});

export { store };
