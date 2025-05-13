import '../styles/main.scss';
import '../components/sf-player';
import '../components/sf-health';
import '../components/sf-stage';

const app = document.querySelector('#app');
if (app) {
  app.innerHTML = '<sf-stage></sf-stage>';
}
