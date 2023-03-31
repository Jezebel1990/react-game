import React from 'react';
import { TILE_SIZE_B } from '../../settings/constants';

interface IProps {
    position: {x: number, y: number};
    text: number;
}

function Tile (props: IProps) {
    return (
        <div style={{ 
        position:'absolute',
        left: TILE_SIZE_B* props.position.x,
        bottom: TILE_SIZE_B * props.position.y,
         width: TILE_SIZE_B,
         height: TILE_SIZE_B,
         border: '2px solid red'}}>
            {props.text}
        </div>
    )
}
export default Tile;