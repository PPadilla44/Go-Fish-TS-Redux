import React from 'react';
// import { setPlayer } from '../store/utils/thunkCreators';
import { PlayerInterface } from '../game/gameInterfaces';
import { CardList } from "../deck"

interface Props {
    index: number,
    data: PlayerInterface
}

export const Player: React.FC<Props> = ({ index, data }) => {

    const { hand, name, is_user } = data;

    const position  = [
        {
            left: "450px",
            top: "500px"
        },
        {
            left: "450px",
            top: "0px"
        },
        {
            left: "50px",
            top: "300px"
        },
        {
            left: "850px",
            top: "300px"
        },
        {
            left: "450px",
            top: "25px"
        },
    ]


    const styles = {
        player: {...position[index]}
    }

    return (
        <div className={is_user ? ` bg-red-900 player` : `player bg-red-600` } style={styles.player}>
            <h1>{name}</h1>
            <CardList cardList={hand} isUser={is_user} />
        </div>
    )
}
