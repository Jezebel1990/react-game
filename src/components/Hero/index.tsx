import React from 'react';
import { TILE_SiZE } from '../settings/constants';
import './index.css';

const Hero = () => {
return (
    <div
    style={{
      position:'absolute',
      bottom:0,
      left:0,
      width: TILE_SiZE,
      height: 150,
      backgroundImage:"url(./assets/HERO.png)" ,
      backgroundRepeat: 'no-repeat',
      animation: "hero-animation 10s steps(6) infinite"
    }}
    />
    ) ;
}
export default Hero;