export function getPlayer(): HTMLElement | null {
  return (
    document.querySelector('sf-player')?.querySelector('.character span') ??
    null
  );
}

export function setInitialStance(): void {
  const character = getPlayer();
  if (!character) {
    return;
  }
  character.classList.add('entrance');
  character.addEventListener(
    'animationend',
    () => {
      character.classList.remove('entrance');
      character.classList.add('stance');
    },
    { once: true }
  );
}
