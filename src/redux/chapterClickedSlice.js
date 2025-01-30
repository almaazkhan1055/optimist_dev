import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chapterClicked: null,
};

const chapterClickedSlice = createSlice({
  name: "chapterClicked",
  initialState,
  reducers: {
    setChapterClicked: (state, action) => {
      state.chapterClicked = action.payload;
    },
  },
});

export const { setChapterClicked } = chapterClickedSlice.actions;
export default chapterClickedSlice.reducer;
