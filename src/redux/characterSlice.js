import { createSlice } from "@reduxjs/toolkit";

const characterSlice = createSlice({
  name: "characters",
  initialState: {
    data: [],
    selected: null,
    pagination: {
      currentPage: 1,
      pageSize: 50,
      totalItems: 0,
      totalPages: 1,
    },
    filter: {
      searchCharacter: "",
      searchTvShow: "",
      sortBy: "name",
    },
  },
  reducers: {
    setCharacters: (state, action) => {
      const { data, totalItems, totalPages } = action.payload;

      state.data = data;
      state.pagination.totalItems = totalItems;
      state.pagination.totalPages = totalPages;
    },
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
    setPagination: (state, action) => {
      state.pagination = { ...state.pagination, ...action.payload };
    },
    setFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload };
    },
  },
});

export const { setCharacters, setSelected, setPagination, setFilter } = characterSlice.actions;
export default characterSlice.reducer;
