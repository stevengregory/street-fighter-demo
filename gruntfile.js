module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            transpile: {
                files: {
                    'css/main.css': ['css/less/main.less']
                }
            }
        },

        watch: {
            less: {
                files: ['css/less/*.less'],
                tasks: ['less:transpile']
            }
        }
    });

    grunt.registerTask('default', ['watch']);
};