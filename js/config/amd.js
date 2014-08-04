// require js config
require.config({
    deps: ['fighter', '../main'],
    paths: {
        'jquery': '../../bower_components/jquery/dist/jquery.min',
        'actions': '../modules/actions',
        'character': '../modules/character',
        'quit': '../modules/quit'
    }
});