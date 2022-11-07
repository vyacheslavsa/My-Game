import {combineReducers} from "redux";
import {gameReducer} from "./gameReducer";

export const rootReducer = combineReducers({
    gameInfo: gameReducer
})

export type RootState = ReturnType<typeof rootReducer>
