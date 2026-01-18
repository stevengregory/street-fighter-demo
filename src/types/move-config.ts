import type { MoveKey, MoveName } from '../types/move';
import type { Posture } from '../types/posture';

export interface MoveConfig {
  movement: MoveName;
  key: MoveKey;
  step: number | false;
  sound: boolean;
  posture?: Posture;
  requiredKeys?: MoveKey[] | false;
  isSpecialMove?: boolean;
}
