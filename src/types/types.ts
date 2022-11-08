export enum GameActions {
    CHANGE_FIELD = "CHANGE_FIELD",
    CHANGE_MOVE = "CHANGE_MOVE",
    CHANGE_NAME_USERS = "CHANGE_NAME_USERS",
    OPEN_RATING_MODAL = "OPEN_RATING_MODAL",
    CHANGE_RESULTS = "CHANGE_RESULTS"
}

export interface FieldsInterface {
    id: number;
    value: boolean | null;
}

export interface Users {
    user_one: string | null;
    user_two: string | null;
}

export interface Results {
    name: string | null;
    result: number | null;
}

export interface GameInfo {
    fieldValues: FieldsInterface[]
    currentMove: boolean;
    userNames: Users,
    openRankingTable: boolean,
    resultsGames: Results[] | []
}

export interface ActionTypesFields {
    type: GameActions.CHANGE_FIELD
    payload: FieldsInterface[]
}

export interface ActionTypesMove {
    type: GameActions.CHANGE_MOVE
    payload: boolean
}

export interface ActionTypesUsers {
    type: GameActions.CHANGE_NAME_USERS
    payload: Users
}

export interface ActionTypesModal {
    type: GameActions.OPEN_RATING_MODAL
    payload: boolean
}

export interface ActionTypesResults {
    type: GameActions.CHANGE_RESULTS
    payload: Results[]
}

export type gameActions = ActionTypesFields | ActionTypesMove | ActionTypesUsers | ActionTypesModal | ActionTypesResults
