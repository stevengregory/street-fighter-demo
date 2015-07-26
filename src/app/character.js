import $ from '../vendor/jquery/dist/jquery.min.js';

// sets character element
var character = $('.character span');

// adds stance to character
var stance = character.addClass('stance');

/**
 * @desc Quits the game, removes character and stage
 * @function quit
 */
var quit = () => {
    $('main').addClass('game-over').children().hide();
};

export { character, stance, quit };