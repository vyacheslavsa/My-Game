export enum GameActions {
    CHANGE_FIELD = "CHANGE_FIELD",
    CHANGE_MOVE = "CHANGE_MOVE",
}

export interface FieldsInterface {
    id: number;
    value: boolean | null;
}

export interface GameInfo {
    fieldValues: FieldsInterface[]
    currentMove: boolean;
}

export interface Test1ActionTypes {
    type: GameActions.CHANGE_FIELD
    payload: FieldsInterface[]
}

export interface Test2ActionTypes {
    type: GameActions.CHANGE_MOVE
    payload: boolean
}

export type gameActions = Test1ActionTypes | Test2ActionTypes
