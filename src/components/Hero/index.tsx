import React from 'react';
import { HERO_HELMET_OFFSET, TILE_SIZE } from '../settings/constants';
import './index.css';

const Hero = () => {
return (
    <div
    style={{
      position:'absolute',
      bottom: TILE_SIZE * 0,
      left:TILE_SIZE * 0,
      width: TILE_SIZE,
      height: TILE_SIZE + HERO_HELMET_OFFSET,
      backgroundImage:"url(./assets/HERO.png)" ,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: `0px -${TILE_SIZE - HERO_HELMET_OFFSET}px`,
      animation: "hero-animation 1s steps(6) infinite"
    }}
    />
    ) ;
}
export default Hero;