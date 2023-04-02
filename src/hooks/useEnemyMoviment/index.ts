import useInterval from "@use-it/interval";
import React from "react";
import { EDirection, EWalker } from "../../components/settings/constants";
import { checkValidMoviment, handleNextPosition } from "../../contexts/canvas/helpers";

function useEnemyMoviment(initialPosition) {
    const [positionState, updatePositionState] = React.useState(initialPosition);
    const [direction, updateDirectionState] = React.useState(EDirection.RIGHT);


useInterval(function move() {
    var random = Math.floor(Math.random() *4);
    var directionArray = Object.values(EDirection);
    const randomDirection = directionArray[random];

    const nextPosition = handleNextPosition(randomDirection, positionState);
    const nextMove = checkValidMoviment( nextPosition, EWalker.ENEMY);

    if (nextMove.valid) {
        updateDirectionState(randomDirection);
        updatePositionState(nextPosition);
    }
} , 2000);

     return {
        position: positionState,
        direction: direction,
     }
    }
export default useEnemyMoviment;
        
        
        
    