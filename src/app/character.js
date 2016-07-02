import $ from '../vendor/jquery/dist/jquery.min.js';

export const character = $('.character span');

export const stance = character.addClass('stance');

export let quit = () => {
    $('main').addClass('game-over').children().hide();
};