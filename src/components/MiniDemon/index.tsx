import React from 'react';
import { TILE_SIZE_B } from '../settings/constants';
import './index.css';

const MiniDemon = () => {
    return (
        <div
        style={{
          position:'absolute',
          bottom: TILE_SIZE_B * 2,
          left:TILE_SIZE_B * 5,
          width: TILE_SIZE_B,
          height: 96,
          backgroundImage:"url(./assets/MINI-DEMON.png)" ,
          backgroundRepeat: 'no-repeat',
          animation: "mini-demon-animation 1s steps(4) infinite"
        }}
        />
        ) ;
    }
export default MiniDemon;