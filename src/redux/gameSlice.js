import { createSlice } from '@reduxjs/toolkit';

const gameModes = {
    fast: { name: 'fast', timePerRound: 15 },
    normal: { name: 'normal', timePerRound: 30 },
    easy: { name: 'easy', timePerRound: 60 },
    free: { name: 'free', timePerRound: null },
};

const initialState = {
    round: 1,
    totalRounds: 5,
    isRunning: false,
    isOver: false,
    mode: null,
    modes: gameModes,
};

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        startGame(state, action) {
            const mode = action.payload;
            state.mode = mode;
            state.isRunning = true;
            state.isOver = false;
            state.round = 1;
        },
        nextRound(state) {
            if (state.round < state.totalRounds) {
                state.round += 1;
            } else {
                state.isOver = true;
                state.isRunning = false;
            }
        },
        endGame(state) {
            state.isOver = true;
            state.isRunning = false;
        },
    },
});

export const { startGame, nextRound, endGame } = gameSlice.actions;
export default gameSlice.reducer;