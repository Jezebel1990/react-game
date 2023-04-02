import React from "react";
import { ECanvas, canvas, checkValidMoviment, handleNextPosition } from "./helpers"; 

interface IProps {
    children: React.ReactNode;
}

export const CanvasContext = React.createContext({
    canvas: [],
    updateCanvas: (direction, currentposition, walker) => null
});

function CanvasProvider(props:IProps) {
    const [canvasState, updateCanvasState] = React.useState ({
     canvas: canvas,
     updateCanvas: (direction, currentposition, walker) => {
        const nextPosition = handleNextPosition(direction, currentposition);
        const nextMove = checkValidMoviment( nextPosition, walker);

       if (nextMove.valid) {
        updateCanvasState((prevState) => {
            const newCanvas = Object.assign([], prevState.canvas);
            const currentValue = newCanvas[currentposition.y][currentposition.x];

            newCanvas[currentposition.y][currentposition.x] = ECanvas.FLOOR;
            newCanvas[nextPosition.y][nextPosition.x]= currentValue;

         return {
            canvas: newCanvas,
            updateCanvas: prevState.updateCanvas,
         }


        })
       }


        return {
            nextPosition,
            nextMove
        }

     }
    });
    return (
        <CanvasContext.Provider value={canvasState}>
            {props.children}
        </CanvasContext.Provider>
    )
}
export default CanvasProvider;