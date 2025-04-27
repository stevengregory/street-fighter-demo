import { default as Action } from './action';
import { moveConfigs } from './move-config';

export const moves = moveConfigs.map(
  (config) =>
    new Action(
      config.movement,
      config.key,
      config.step,
      config.sound,
      config.posture
    )
);
