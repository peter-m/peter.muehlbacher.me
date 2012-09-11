module.exports = function( grunt ) {
    'use strict';

    grunt.initConfig({
        pkg: '<json:package.json>',
        meta: {
            name: '<%= pkg.name %>',
            banner: '/*! <%= meta.name %> - v<%= pkg.version %> - <%= grunt.template.today("m/d/yyyy") %>\n' +
                    '* <%= pkg.homepage %>\n' +
                    '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
                    ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n'
        },
        concat: {
            js: {
                src: ['<banner>', 'dist/app.min.js'],
                dest: 'dist/app.min.js'
            },
            css: {
                src: ['<banner>', 'src/css/libs/normalize.css', 'src/css/app.css'],
                dest: 'dist/app.css'
            }
        },
        requirejs: {
            compile: {
                options: {
                    inlineText: true,
                    baseUrl: "src/js",
                    name: "main",
                    mainConfigFile: "src/js/main.js",
                    out: "dist/app.min.js",
                    preserveLicenseComments: false
                }
            },
            debug: {
                options: {
                    inlineText: true,
                    baseUrl: "src/js",
                    name: "main",
                    mainConfigFile: "src/js/main.js",
                    out: "dist/app.js",
                    preserveLicenseComments: true,
                    optimize: "none"
                }
            },
            css: {
                options: {
                    cssIn: 'dist/app.css',
                    out: 'dist/app.min.css'
                }
            }
        },
        sass: {
            dist: {
                src: 'src/css/app.scss',
                dest: 'src/css/app.css'
            }
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true
            },
            globals: {
                exports: true,
                module: false
            }
        }
    });

    grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('default', 'concat:css requirejs concat:js sass');

};