import React from 'react';
import { EDirection, HEAD_OFFSET,  TILE_SIZE } from '../settings/constants';
import './index.css';
import useHeroMoviment from '../../hooks/useHeroMoviment';

interface IProps {
  initialPosition: {x: number; y: number}
}

const Hero = (props: IProps) => {
  const { position, direction} = useHeroMoviment(props.initialPosition);


return (
    <div
    style={{
      position:'absolute',
      top: TILE_SIZE * position.y - HEAD_OFFSET,
      left:TILE_SIZE * position.x,
      width: TILE_SIZE,
      height: TILE_SIZE + HEAD_OFFSET,
      backgroundImage:"url(./assets/HERO.png)" ,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: `0px -${TILE_SIZE - 30}px`,
      animation: "hero-animation 1s steps(4) infinite",
      transform: `scaleX(${direction === EDirection.LEFT ? -1 : 1})`,
      zIndex: 1,
    }}
    />
    ) ;
}
export default Hero;