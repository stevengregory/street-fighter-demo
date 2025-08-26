import { Config } from './config';

let musicAudio: HTMLAudioElement | null = null;

export const SoundManager = {
  play(soundName: string): void {
    const audio = new Audio(`sounds/${soundName}.mp3`);
    audio.play();
  },

  playMusicTrack(trackName: string): void {
    if (musicAudio) {
      musicAudio.pause();
    }
    const music = new Audio(`sounds/${trackName}.mp3`);
    music.loop = true;
    music.volume = Config.musicVolume;
    musicAudio = music;
    music.play();
  },
};
