import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    author: '',
    text: '',
};

const messageBoardSlice = createSlice({
  name: 'messageBoard',
  initialState,
  reducers: {
    setAuthor: (state, action) => {
        state.author = action.payload;
        return state.author;
    },
  },
});

export const { setAuthor } = messageBoardSlice.actions;

export default messageBoardSlice.reducer;