import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loadiing: true,
  enabledFlag: {
    showLightDarkmode: false,
    showTicTacToeBoard: false,
    showRandomColorGenerator: false,
    showAccordian: false,
    showTreeView: false,
  },
};

const featureFlagSlice = createSlice({
  name: "featureFlags",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loadiing = action.payload;
    },
    setEnabledFlag: (state, action) => {
      state.enabledFlag = { ...state.enabledFlag, ...action.payload };
    },
  },
});

export const { setLoading, setEnabledFlag } = featureFlagSlice.actions;
export default featureFlagSlice.reducer;
