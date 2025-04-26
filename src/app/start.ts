import '../sass/style.scss';

document.querySelector('#app').innerHTML = `
  <div class="logo"></div>
  <main role="main">
    <div class="health">
      <progress max="100" value="100"></progress>
      <span class="player-icon"></span>
      <p>dudley</p>
    </div>
    <div class="character">
      <span></span>
    </div>
  </main>
`;
