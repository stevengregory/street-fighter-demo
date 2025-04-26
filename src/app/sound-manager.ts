export class SoundManager {
  private static musicAudio: HTMLAudioElement | null = null;

  static play(soundName: string): void {
    const audio = new Audio(`sounds/${soundName}.mp3`);
    audio.play();
  }

  static playMusicTrack(trackName: string): void {
    if (this.musicAudio) {
      this.musicAudio.pause();
    }
    const music = new Audio(`sounds/${trackName}.mp3`);
    music.loop = true;
    music.volume = 0.15;
    this.musicAudio = music;
    music.play();
  }
}