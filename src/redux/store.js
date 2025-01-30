import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./filterSlice";
import headerFooterReducer from "./headerFooterActiveSlice";
import chapterClickedReducer from "./chapterClickedSlice";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    headerFooter: headerFooterReducer,
    chapterClicked: chapterClickedReducer,
  },
});
