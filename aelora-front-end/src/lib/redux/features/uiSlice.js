import { createSlice } from '@reduxjs/toolkit'

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    selectedHomeTab: "all",
  },
  reducers: {
    
    switchHomeTab: (state, action) => {
      state.selectedHomeTab = action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { switchHomeTab } = uiSlice.actions;
export default uiSlice.reducer;