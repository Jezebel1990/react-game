import React from 'react';
import { TILE_SIZE_B } from '../settings/constants';
import './index.css';

const Chest = () => {
    return (
        <div
        style={{
          position:'absolute',
          bottom: TILE_SIZE_B * 15,
          left:TILE_SIZE_B * 15,
          width: TILE_SIZE_B,
          height: TILE_SIZE_B,
          backgroundImage:"url(./assets/CHEST.png)" ,
          backgroundRepeat: 'no-repeat',
          animation: "chest-animation 1s steps(3) infinite"
        }}
        />
        ) ;
    }
export default Chest;