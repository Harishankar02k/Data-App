
import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: JSON.parse(localStorage.getItem('data')) || [],
  reducers: {
    addData: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('data', JSON.stringify(state));
    },
    clearData: (state) => {
      state.splice(0, state.length);
      localStorage.removeItem('data');
    },
  },
});

export const { addData, clearData } = dataSlice.actions;
export default dataSlice.reducer;
