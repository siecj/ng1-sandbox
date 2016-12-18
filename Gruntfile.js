module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            options: {
                port: 9050,
                hostname: '*',
                directory: null,
                base: ['.', './app'],
                open: 'http://localhost:9050/index.html'
            },
            devServer: {
                options: {
                    livereload: true,
                }
            }
        },
        watch: {
            all: {
                files: ['app/**'],
                options: {
                    livereload: true
                }
            },
            src: {
                files: ['app/**/*.js'],
                tasks: ['jshint:src']
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                browser: true,
                devel: true
            },
            src: 'app/**/*.js'
        }
    });

    // grunt.loadNpmTasks('grunt-concurrent');
    // grunt.loadNpmTasks('grunt-connect-proxy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    // grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    // grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['connect:devServer', 'watch:all']);

    // grunt.registerTask('default', ['concurrent:dev']);
    // grunt.registerTask('check', ['jshint']);
    // grunt.registerTask('unittest', ['connect:unittest', 'jasmine:app']);

};