import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'inputval',
  initialState: {
    value: '',
  },
  reducers: {
    setText: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setText } = searchSlice.actions;
export default searchSlice.reducer;
