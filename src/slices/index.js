import { configureStore } from '@reduxjs/toolkit';
import messageBoardReducer from './messageBoardSlice';
import averageNumberReducer from './averageNumberSlice';

const store = configureStore({
    reducer: {
        messageBoard: messageBoardReducer,
        averageNumber: averageNumberReducer,
    },
});

export default store;