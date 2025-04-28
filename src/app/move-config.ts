import { MoveConfig } from '../types/move-config';

export const moveConfigs: MoveConfig[] = [
  { movement: 'block', key: 'b', step: false, sound: false },
  { movement: 'corkscrew-blow', key: '2', step: false, sound: true },
  { movement: 'cross', key: 'c', step: false, sound: true },
  {
    movement: 'dart-shot',
    key: 'd',
    step: false,
    sound: true,
    requiredKeys: ['ArrowRight']
  },
  { movement: 'duck', key: 'ArrowDown', step: false, sound: false },
  { movement: 'fall', key: 'f', step: false, sound: true },
  { movement: 'hook', key: 'h', step: false, sound: true },
  { movement: 'jab', key: 'j', step: false, sound: true },
  { movement: 'jet-uppercut', key: '1', step: false, sound: true },
  { movement: 'jump', key: 'ArrowUp', step: false, sound: false },
  {
    movement: 'jumping-elbow',
    key: 'e',
    step: false,
    sound: true,
    posture: 'jumping',
    requiredKeys: ['ArrowUp']
  },
  { movement: 'rest', key: 'r', step: false, sound: false },
  { movement: 'uppercut', key: 'u', step: false, sound: true },
  { movement: 'walk', key: 'ArrowRight', step: 30, sound: false },
  { movement: 'walk-backwards', key: 'ArrowLeft', step: -30, sound: false },
  { movement: 'entrance', key: '', step: false, sound: false }
];
