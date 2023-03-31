import React from 'react';
import { DEMON_TILE_SIZE, EDirection, TILE_SIZE_B } from '../settings/constants';
import './index.css';
import useEnemyMoviment from '../../hooks/useEnemyMoviment';

interface IProps {
  initialPosition: { x: number; y:number}
};


const Demon = (props : IProps) => {
  const moviment = useEnemyMoviment(props.initialPosition);


    return (
        <div
        style={{
          position:'absolute',
          bottom: TILE_SIZE_B * moviment.position.y,
          left:TILE_SIZE_B * moviment.position.x,
          width: DEMON_TILE_SIZE,
          height: DEMON_TILE_SIZE,
          backgroundImage:"url(./assets/DEMON.png)" ,
          backgroundRepeat: 'no-repeat',
          animation: "demon-animation 1s steps(4) infinite",
          transform: `scaleX(${moviment.direction === EDirection.LEFT ? -1 : 1})`
        }}
        />
        ) ;
    }
export default Demon;