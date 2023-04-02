export const TILE_SIZE = 48;
export const DEMON_TILE_SIZE = TILE_SIZE * 2;
export const HEAD_OFFSET = 12;
export const GAME_SIZE = 20 * TILE_SIZE;

export enum EDirection {
    UP = 'ArrowUp',
    RIGHT = 'ArrowRight',
    DOWN = 'ArrowDown',
    LEFT = 'ArrowLeft',
  }
  
  export enum EWalker {
    HERO = "hero",
    ENEMY = "enemy"
  }