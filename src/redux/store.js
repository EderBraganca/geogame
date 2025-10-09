import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './slices/gameSlice';
import timerReducer from './slices/timerSlice';

export const store = configureStore({
  reducer: {
    game: gameReducer,
    timer: timerReducer,
  },
});