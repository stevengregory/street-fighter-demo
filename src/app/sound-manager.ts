export class SoundManager {
  static play(soundName: string): void {
    const audio = new Audio(`sounds/${soundName}.mp3`);
    audio.play();
  }
}