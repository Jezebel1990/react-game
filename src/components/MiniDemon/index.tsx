import React from 'react';
import { DEMON_HELMET_OFFSET, EDirection, TILE_SIZE_B } from '../settings/constants';
import './index.css';
import useEnemyMoviment from '../../hooks/useEnemyMoviment';

// const moviment = {
//   position: {x: 5, y: 5},
//   direction: EDirection.RIGHT,
// };
interface IProps {
  initialPosition: { x: number; y:number}
};


const MiniDemon = (props : IProps) => {
  const moviment = useEnemyMoviment(props.initialPosition);

    return (
        <div
        style={{
          position:'absolute',
          bottom: TILE_SIZE_B * moviment.position.y,
          left:TILE_SIZE_B * moviment.position.x,
          width: TILE_SIZE_B,
          height: TILE_SIZE_B + DEMON_HELMET_OFFSET,
          backgroundImage:"url(./assets/MINI-DEMON.png)" ,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: `0px -${TILE_SIZE_B - DEMON_HELMET_OFFSET}px`,
          animation: "mini-demon-animation 1s steps(4) infinite",
          transform: `scaleX(${moviment.direction === EDirection.LEFT ? -1 : 1})`
        }}
        />
        ) ;
    }
export default MiniDemon;