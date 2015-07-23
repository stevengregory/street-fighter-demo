import $ from '../vendor/jquery/dist/jquery.min.js';

var character = $('.character span'),
    stance = character.addClass('stance'),
    quit = () => {
        return $('main').addClass('game-over').children().hide();
    };

export { character, stance, quit };