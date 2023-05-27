import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    showMenuMobile: false,
    showSearchMobile: false,
  },
  reducers: {
    toggleShowMenuMobile: (state, action) => {
      state.showMenuMobile = !state.showMenuMobile;
    },
    toggleShowSearchMobile: (state, action) => {
      state.showSearchMobile = !state.showSearchMobile;
    },
  },
});

export const { toggleShowMenuMobile, toggleShowSearchMobile } =
  appSlice.actions;

export const selectApp = ({ app }) => app;

export default appSlice.reducer;
