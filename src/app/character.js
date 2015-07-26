import $ from '../vendor/jquery/dist/jquery.min.js';

// sets character element
var character = $('.character span');

// adds stance to character
var stance = character.addClass('stance');

// quits the game, removes character and stage
var quit = () => {
    return $('main').addClass('game-over').children().hide();
};

export { character, stance, quit };