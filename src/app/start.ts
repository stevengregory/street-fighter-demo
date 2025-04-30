import '../sass/style.scss';
import '../components/sf-stage.ts';
import { setInitialStance } from './player.ts';

document.querySelector('#app')!.innerHTML = `<sf-stage></sf-stage>`;
customElements.whenDefined('sf-stage').then(() => {
  requestAnimationFrame(() => {
    setInitialStance();
  });
});
