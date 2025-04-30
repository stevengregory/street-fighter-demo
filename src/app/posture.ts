import { Posture } from '../types/posture';

export function getPosture(movement: string): Posture | undefined {
  const postureMap: Record<string, Posture> = {
    duck: Posture.Crouching,
    jump: Posture.Jumping,
    walk: Posture.Standing,
    'walk-backwards': Posture.Standing
  };
  return postureMap[movement];
}
