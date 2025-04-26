import $ from 'jquery';

export const character: JQuery<HTMLElement> = $('.character span');
export const stance: JQuery<HTMLElement> = character.addClass('stance');
