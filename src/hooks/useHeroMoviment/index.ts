import useEventListener from '@use-it/event-listener';
import React from 'react';
import { EDirection } from '../../components/settings/constants';
import { handleNextPosition } from '../../contexts/canvas/helpers';

function useHeroMoviment(initialPosition) {
    const [positionState, updatePositioState] = React.useState(initialPosition);
    const [direction, updateDirectionState] = React.useState(EDirection.RIGHT);

    useEventListener('keydown', (event: any) => {
    const direction = event.key ;

    if (direction.indexOf("Arrow") === -1) {
     return;
    }

    const nextPosition = handleNextPosition(direction, positionState);
    updatePositioState(nextPosition);
    updateDirectionState(direction);
 });
 return {
    position: positionState,
    direction: direction,
 }

}
export default useHeroMoviment;
