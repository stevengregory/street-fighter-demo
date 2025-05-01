export function getPlayer(): HTMLElement | null {
  const player = document.querySelector('sf-player') as any;
  return player?.element ?? null;
}
