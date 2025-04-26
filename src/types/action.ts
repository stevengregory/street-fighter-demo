import { MoveKey, MoveName } from './move';

export interface ActionParams {
  movement: MoveName;
  key: MoveKey;
  step: number | false;
  sound: boolean;
}