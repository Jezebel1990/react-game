import React from 'react';
import { DEMON_TILE_SIZE, TILE_SIZE_B } from '../settings/constants';
import './index.css';

const Chest = () => {
    return (
        <div
        style={{
          position:'absolute',
          bottom: TILE_SIZE_B * 15,
          left:TILE_SIZE_B * 15,
          width: DEMON_TILE_SIZE,
          height: DEMON_TILE_SIZE,
          backgroundImage:"url(./assets/CHEST.png)" ,
          backgroundRepeat: 'no-repeat',
          animation: "chest-animation 1s steps(2) infinite"
        }}
        />
        ) ;
    }
export default Chest;