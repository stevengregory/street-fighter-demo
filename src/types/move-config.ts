import { MoveName, MoveKey } from '../types/move';
import { PlayerPosture } from './posture';

export interface MoveConfig {
  movement: MoveName;
  key: MoveKey;
  step: number | false;
  sound: boolean;
  posture?: PlayerPosture;
}
