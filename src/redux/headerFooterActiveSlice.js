import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isHeaderFooterActive: true,
};

const headerFooterActiveSlice = createSlice({
  name: "headerFooter",
  initialState,
  reducers: {
    setHeaderFooter: (state, action) => {
      state.isHeaderFooterActive = action.payload;
    },
  },
});

export const { setHeaderFooter } = headerFooterActiveSlice.actions;
export default headerFooterActiveSlice.reducer;
