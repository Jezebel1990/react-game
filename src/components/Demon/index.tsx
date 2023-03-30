import React from 'react';
import { DEMON_TILE_SIZE, TILE_SIZE_B } from '../settings/constants';
import './index.css';

const Demon = () => {
    return (
        <div
        style={{
          position:'absolute',
          bottom: TILE_SIZE_B * 5,
          left:TILE_SIZE_B * 5,
          width: DEMON_TILE_SIZE,
          height: DEMON_TILE_SIZE,
          backgroundImage:"url(./assets/DEMON.png)" ,
          backgroundRepeat: 'no-repeat',
          animation: "demon-animation 1s steps(4) infinite"
        }}
        />
        ) ;
    }
export default Demon;