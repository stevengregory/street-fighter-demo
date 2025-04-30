import { MoveName, MoveKey } from '../types/move';
import { Posture } from '../types/posture';

export interface MoveConfig {
  movement: MoveName;
  key: MoveKey;
  step: number | false;
  sound: boolean;
  posture?: Posture;
  requiredKeys?: MoveKey[] | false;
  isSpecialMove?: boolean;
}
