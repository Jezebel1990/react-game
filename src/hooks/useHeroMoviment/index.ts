import useEventListener from '@use-it/event-listener';
import React from 'react';
import { EDirection, EWalker } from '../../components/settings/constants';
import {  checkValidMoviment, handleNextPosition } from '../../contexts/canvas/helpers';

function useHeroMoviment(initialPosition) {
    const [positionState, updatePositioState] = React.useState(initialPosition);
    const [direction, updateDirectionState] = React.useState(EDirection.RIGHT);
    

    useEventListener('keydown', (event: any) => {
            const direction = event.key as EDirection;

            if (direction.indexOf("Arrow") === -1) {
                return;
            }

            const nextPosition = handleNextPosition(direction, positionState);
            const nextMove = checkValidMoviment( nextPosition, EWalker.HERO);

            if (nextMove.valid) {
            updatePositioState(nextPosition);
            updateDirectionState(direction);

            }
            if (nextMove.dead) {
            console.log('Você morreu');
            }
        });

 return {
    position: positionState,
    direction: direction,
 }

}

export default useHeroMoviment;
