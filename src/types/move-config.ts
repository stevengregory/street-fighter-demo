import type { Posture } from '../types/posture';
import type { MoveName, MoveKey } from '../types/move';

export interface MoveConfig {
  movement: MoveName;
  key: MoveKey;
  step: number | false;
  sound: boolean;
  posture?: Posture;
  requiredKeys?: MoveKey[] | false;
  isSpecialMove?: boolean;
}
