import { character as c } from './character';
import $ from '../bower_components/jquery/dist/jquery.min.js';

var quit = function() {
    $('main').addClass('game-over');
    $('.health').hide();
    c.hide();
};

export { quit };