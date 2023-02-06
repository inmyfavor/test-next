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
    },
    setText: (state, action) => {
        state.text = action.payload;
    },
  },
});

export const { setAuthor, setText } = messageBoardSlice.actions;

export default messageBoardSlice.reducer;