
export interface GameInterface {
    cards?: Array<CardInterface>,
    players?: Array<PlayerInterface>
    text?: Array<string>
}

export interface CardInterface {
    id: string,
    point_val: number,
    string_val: string,
    suit: string,
}

export interface PlayerInterface {
    id: string,
    name: "string",
    hand: Array<CardInterface>,
    is_user: boolean,
}

