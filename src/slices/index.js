import { configureStore } from '@reduxjs/toolkit';
import messageBoardReducer from '../slices/messageBoardSlice';

const store = configureStore({
    reducer: {
        messageBoard: messageBoardReducer,
        // averageNumber: averageNumberReducer,
    },
});

export default store;