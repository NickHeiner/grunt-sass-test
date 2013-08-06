var path = require('path');

module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dev: {
                options: {
                    includePaths: [
                        // neither of the following two works:

//                        path.resolve('scss')
                        'scss'

                    ]
                },
                files: {
                    'main.css': 'main.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.registerTask('default', ['sass']);
}