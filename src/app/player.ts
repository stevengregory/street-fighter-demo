import type { SFPlayer } from '../components/sf-player';

export function getPlayer(): HTMLElement | null {
  const player = document.querySelector('sf-player') as SFPlayer;
  return player?.element ?? null;
}
