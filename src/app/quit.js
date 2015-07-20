import { character as c } from './character';
import $ from '../vendor/jquery/dist/jquery.min.js';

var quit = function() {
    $('main').addClass('game-over');
    $('.health').hide();
    c.hide();
};

export { quit };