import {gameActions, GameInfo, GameActions, FieldsInterface, Users, Results} from "../../types/types";
import {arrFields} from "../../constans";

const initialState: GameInfo = {
    fieldValues: arrFields,
    currentMove: true,
    userNames: {
        user_one: null,
        user_two: null
    },
    openRankingTable: false,
    resultsGames: []
}

export const gameReducer = (state = initialState, action: gameActions): GameInfo => {
    switch (action.type) {
        case GameActions.CHANGE_FIELD:
            return {...state, fieldValues: action.payload}
        case GameActions.CHANGE_MOVE:
            return {...state, currentMove: action.payload}
        case GameActions.CHANGE_NAME_USERS:
            return {...state, userNames: action.payload}
        case GameActions.OPEN_RATING_MODAL:
            return {...state, openRankingTable: action.payload}
        case GameActions.CHANGE_RESULTS:
            return {...state, resultsGames: action.payload}
        default:
            return state
    }
}

export const changeCurrentField = (payload: FieldsInterface[]) => ({type: GameActions.CHANGE_FIELD, payload})
export const changeCurrentMove = (payload: boolean) => ({type: GameActions.CHANGE_MOVE, payload})
export const changeCurrentUsers = (payload: Users) => ({type: GameActions.CHANGE_NAME_USERS, payload})
export const openRating = (payload: boolean) => ({type: GameActions.OPEN_RATING_MODAL, payload})
export const changeResults = (payload: Results[]) => ({type: GameActions.CHANGE_RESULTS, payload})
