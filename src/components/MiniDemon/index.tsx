import React from 'react';
import { DEMON_HELMET_OFFSET, TILE_SIZE_B } from '../settings/constants';
import './index.css';

const MiniDemon = () => {
    return (
        <div
        style={{
          position:'absolute',
          bottom: TILE_SIZE_B * 2,
          left:TILE_SIZE_B * 5,
          width: TILE_SIZE_B,
          height: TILE_SIZE_B + DEMON_HELMET_OFFSET,
          backgroundImage:"url(./assets/MINI-DEMON.png)" ,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: `0px -${TILE_SIZE_B - DEMON_HELMET_OFFSET}px`,
          animation: "mini-demon-animation 1s steps(4) infinite"
        }}
        />
        ) ;
    }
export default MiniDemon;