import '../styles/main.scss';
import '../components/sf-player';
import '../components/sf-stage';
import { setInitialStance } from './player';

document.querySelector('#app')!.innerHTML = `<sf-stage></sf-stage>`;
customElements.whenDefined('sf-stage').then(() => {
  requestAnimationFrame(() => {
    setInitialStance();
  });
});
