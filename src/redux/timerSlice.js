import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  duration: 30,
  remaining: 30,
  isActive: false,
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    startTimer(state, action) {
      const { duration } = action.payload;
      state.duration = duration ?? Infinity;
      state.remaining = duration ?? Infinity;
      state.isActive = duration !== null;
    },
    tick(state) {
      if (state.isActive && state.remaining > 0 && state.remaining !== Infinity) {
        state.remaining -= 1;
      } else if (state.remaining === 0) {
        state.isActive = false;
      }
    },
    resetTimer(state) {
      state.remaining = state.duration;
      state.isActive = false;
    },
  },
});

export const { startTimer, tick, resetTimer } = timerSlice.actions;
export default timerSlice.reducer;
