import React from 'react';
import Chest from '../Chest';
import Demon from '../Demon';
import Hero from '../Hero';
import MiniDemon from '../MiniDemon';
import { GAME_SIZE } from '../settings/constants';
import Trap from '../Trap';

const Board  = () => {
    return (

        <div>
            <Demon />
            <MiniDemon/>
            <Hero/>
            <Chest/>
            <Trap />
        <img src="./assets/tileset.gif" alt="" width={GAME_SIZE} height={GAME_SIZE}/>
        </div>
    );
}

export default Board;