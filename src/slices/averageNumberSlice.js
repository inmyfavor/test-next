import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    number: '',
};

const averageNumberSlice = createSlice({
  name: 'averageNumber',
  initialState,
  reducers: {
    setNumber: (state, action) => {
        state.number = action.payload;
    },
  },
});

export const { setNumber } = averageNumberSlice.actions;

export default averageNumberSlice.reducer;