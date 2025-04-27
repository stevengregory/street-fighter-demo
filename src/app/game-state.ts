export class GameState {
  static playerPositionX: number = 20;
  static playerFacing: 'right' | 'left' = 'right';
  static workingSpaceWidth: number = 679;

  static reset(): void {
    this.playerPositionX = 20;
    this.playerFacing = 'right';
  }

  static movePlayer(step: number): void {
    this.playerPositionX += step;
  }

  static setWorkingSpaceWidth(width: number): void {
    this.workingSpaceWidth = width;
  }
}