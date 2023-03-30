import React from 'react';
import { TILE_SIZE } from '../settings/constants';
import './index.css';

const Hero = () => {
return (
    <div
    style={{
      position:'absolute',
      bottom: TILE_SIZE * 0,
      left:TILE_SIZE * 0,
      width: TILE_SIZE,
      height: 150,
      backgroundImage:"url(./assets/HERO.png)" ,
      backgroundRepeat: 'no-repeat',
      animation: "hero-animation 1s steps(6) infinite"
    }}
    />
    ) ;
}
export default Hero;