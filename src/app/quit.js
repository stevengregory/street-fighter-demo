import $ from '../vendor/jquery/dist/jquery.min.js';

function quit() {
    $('main').addClass('game-over').children().hide();
}

export { quit };