module.exports = {
    html: {
        files: ['index.html'],
        tasks: ['htmlhint']
    },
    jshint: {
        files: ['Gruntfile.js', 'js/**'],
        tasks: ['jshint:all']
    }
};