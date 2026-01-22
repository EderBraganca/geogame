import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './gameSlice';
import timerReducer from './timerSlice';

export const store = configureStore({
  reducer: {
    game: gameReducer,
    timer: timerReducer,
  },
});