import React from 'react';
import { TILE_SIZE } from '../settings/constants';
import './index.css';
import { ChestsContext } from '../../contexts/chests';

// const moviment = {
//   position: {x: 5, y: 5},
//   direction: EDirection.RIGHT,
// };
interface IProps {
  initialPosition: { x: number; y:number}
};



const Chest = (props: IProps) => {
 const chestsContext = React.useContext(ChestsContext);

 const shouldAnimate = chestsContext.openedChests.positions.find((position) => {
   const match = props.initialPosition.y === position.y && props.initialPosition.x === position.x;

   return match;
 })

    return (
        <div
        style={{
          position:'absolute',
          top: TILE_SIZE * props.initialPosition.y,
          left:TILE_SIZE * props.initialPosition.x,
          width: TILE_SIZE,
          height: 100,
          backgroundImage:"url(./assets/CHEST.png)" ,
          backgroundRepeat: 'no-repeat',
          animation: shouldAnimate && "chest-animation 1s steps(2) forwards"
        }}
        />
        ) ;
    }
export default Chest;