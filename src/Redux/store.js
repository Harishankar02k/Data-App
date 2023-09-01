import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';
import dataReducer from '../Modal/DataSlice';

const persistedData = localStorage.getItem('data');
const preloadedState = persistedData ? { data: JSON.parse(persistedData) } : {};

const store = configureStore({
  reducer: {
    rootReducer,
    data: dataReducer,
  },
  preloadedState,
});

export default store;
