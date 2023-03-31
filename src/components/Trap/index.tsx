import React from 'react';
import { DEMON_TILE_SIZE, TILE_SIZE_B } from '../settings/constants';
import './index.css';

const Trap = () => {
    return (
        <div
        style={{
          position:'absolute',
          bottom: TILE_SIZE_B * 14,
          left:TILE_SIZE_B * 9,
          width: DEMON_TILE_SIZE,
          height: 100,
          backgroundImage:"url(./assets/TRAP.png)" ,
          backgroundRepeat: 'no-repeat',
          animation: "trap-animation 1s steps(4) infinite"
        }}
        />
        ) ;
    }
export default Trap;