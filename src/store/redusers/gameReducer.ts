import {gameActions, GameInfo, GameActions} from "../../types/types";

const createId = () => {
    return Math.round(Math.random() * 100000000000000000000)
}

export const arrFields = [
    {
        id: createId(),
        value: null
    },
    {
        id: createId(),
        value: null
    },
    {
        id: createId(),
        value: null
    },
    {
        id: createId(),
        value: null
    },
    {
        id: createId(),
        value: null
    },
    {
        id: createId(),
        value: null
    },
    {
        id: createId(),
        value: null
    },
    {
        id: createId(),
        value: null
    },
    {
        id: createId(),
        value: null
    }
]

const initialState: GameInfo = {
    fieldValues: arrFields,
    currentMove: true
}

export const gameReducer = (state = initialState, action: gameActions): GameInfo => {
    switch (action.type) {
        case GameActions.CHANGE_FIELD:
            return {...state, fieldValues: action.payload}
        case GameActions.CHANGE_MOVE:
            return {...state, currentMove: action.payload}
        default:
            return state
    }
}
