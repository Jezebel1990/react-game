import React from 'react';
import Chest from '../Chest';
import Demon from '../Demon';
import Hero from '../Hero';
import MiniDemon from '../MiniDemon';
import { GAME_SIZE } from '../settings/constants';
import Trap from '../Trap';
import { ECanvas, canvas } from '../../contexts/canvas/helpers';

function getCanvasMap() {
    const array = [];

    for (let y = 0; y < canvas.length; y++) {
        const canvasY = canvas[y];

        for (let x = 0; x < canvasY.length; x++){
            const canvasYX = canvasY[x];
        
        const position = { x: x, y : y};
        const text = canvas[y][x] || canvasYX;
        const key = `${x}-${y}`;

        if (text === ECanvas.TRAP) {
            array.push(<Trap key={key} initialPosition={position}/>)
        }

        if (text === ECanvas.MINI_DEMON) {
            array.push(<MiniDemon key={key} initialPosition={position}/>)
        }

        if (text === ECanvas.DEMON) {
            array.push(<Demon key={key} initialPosition={position}/>)
        }

        if (text === ECanvas.CHEST) {
            array.push(<Chest key={key} initialPosition={position}/>)
        }

        if (text === ECanvas.HERO) {
            array.push(<Hero key={key} initialPosition={position}/>)
        }

        }
    }
    return array;
}



const elements = getCanvasMap();

const Board  = () => {
    return (

        <div>
            {/* <Demon initialPosition={{ x:9, y:9}}/>
            <MiniDemon initialPosition={{ x:10, y:8}}/>
            <MiniDemon initialPosition={{ x:10, y:10}}/>
            <Hero/>
            <Chest/>
            <Trap /> */}
{elements}

        <img src="./assets/tileset.gif" alt="" width={GAME_SIZE} height={GAME_SIZE}/>
        </div>
    );
}

export default Board;