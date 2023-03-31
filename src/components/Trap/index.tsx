import React from 'react';
import {  TILE_SIZE_B } from '../settings/constants';
import './index.css';

const Trap = () => {
    return (
        <div
        style={{
          position:'absolute',
          bottom: TILE_SIZE_B * 14,
          left:TILE_SIZE_B * 5,
          width: TILE_SIZE_B,
          height: TILE_SIZE_B,
          backgroundImage:"url(./assets/TRAP.png)" ,
          backgroundRepeat: 'no-repeat',
          animation: "trap-animation 1s steps(7) infinite"
        }}
        />
        ) ;
    }
export default Trap;