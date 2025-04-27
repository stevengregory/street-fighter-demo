import { MoveName, MoveKey } from '../types/move';

export interface MoveConfig {
  movement: MoveName;
  key: MoveKey;
  step: number | false;
  sound: boolean;
}
