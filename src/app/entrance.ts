import { default as Action } from './action';
import { SoundManager } from './sound-manager';
import { Config } from './config';

let musicStarted = false;
window.addEventListener('keydown', () => {
  if (!musicStarted && Config.playBackgroundMusic) {
    SoundManager.playMusicTrack('dudley-theme');
    musicStarted = true;
  }
});
new Action('entrance', '', false, false).doMove();
