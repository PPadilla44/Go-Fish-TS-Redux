import axios from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { GameInterface } from "./gameInterfaces";
// import { doneSetCard, doneSetPlayer, gotGame, checkingForPair, turnCheck } from "../game";


export interface GameState {
    data: GameInterface;
    status: "idle" | "loading" | "failed";
}

const initialState: GameState = {
    data: {},
    status: "loading",
}

export const fetchGame = createAsyncThunk(
    "game/fetchGame",
    async () => {
        const { data } = await axios.get(`http://localhost:5000/start`);
        // const gameData = {
        //     ...data,
        //     selectedCard: {},
        //     selectedPlayer: {},
        //     saidCards: [],
        //     turn: 0,
        // }
        console.log(data);
        
        return data;
    }
)


export const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        change: (state) => { state.data = { text: ["lolf"] } }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGame.pending, (state) => {
            state.status = "loading";
        })
        .addCase(fetchGame.fulfilled, (state, action) => {
            state.status = "idle";
            state.data = action.payload;
        })
    },
});

export const { change } = gameSlice.actions;

export const selectGame = (state: RootState) => state.game;

export default gameSlice.reducer;
// // START GAME
// export const fetchGame = () => async (dispatch) => {
//     try {
//         const { data } = await axios.get(`http://localhost:5000/start`);

//         const gameData = {
//             ...data,
//             selectedCard: {},
//             selectedPlayer: {},
//             saidCards: [],
//             turn: 0,
//         }

//         dispatch(gotGame(gameData));
//     } catch (error) {
//         console.error(error);
//     }
// }



// export const setPlayer = (player) => async (dispatch) => {
//     if (!player.is_user) {
//         dispatch(doneSetPlayer(player));
//         dispatch(checkingForPair());
//         dispatch(turnCheck())
//     }
// }

// export const setCard = (card, isUser) => async (dispatch) => {
//     if (isUser) {
//         dispatch(doneSetCard(card));
//     }
// }


// // PLAYER THUNK CREATORS
// // export const fetchPlayers