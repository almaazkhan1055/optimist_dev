import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showActiveFilter: false,
  activeFilter: null,
  categoryIndex: 0,
  tutorIndex: 0,
  searchFilterText: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    toggleShowActiveFilter: (state) => {
      state.showActiveFilter = !state.showActiveFilter;
    },
    setActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    setCategoryIndex: (state, action) => {
      state.categoryIndex = action.payload;
    },
    setTutorIndex: (state, action) => {
      state.tutorIndex = action.payload;
    },
    setSearchFilterText: (state, action) => {
      state.searchFilterText = action.payload;
    },
  },
});

export const {
  toggleShowActiveFilter,
  setActiveFilter,
  setCategoryIndex,
  setTutorIndex,
  setSearchFilterText,
} = filtersSlice.actions;

export default filtersSlice.reducer;
