/*
* The wrapper function is required by grunt and its plugins
* all configuration are structured inside the module.exports
* Create a module and export it
*/
module.exports = function(grunt) {
  // CONFIGURE GRUNT
  grunt.initConfig({
    // get the configuration info from package.json file
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),

    //the watch task watches for any changes in the sass directory
    //in the event of an update 'compass' and 'cssmin' tasks are run contineously

    watch: {
      compass: {
        files: ['./sass/*.scss'],
        tasks: ['compass', 'cssmin'],
        options: {
          spawn: false,
        }
      }
    },

    // sass task configuration
    compass: {
      build: {
        files: [{
          // src: './sass/**/*.scss',
          src: './sass/style.scss',
          dest: './style.css'
        }]
      }
    },

    //concat task configuration
    concat: {
      basic: {
        src: ['./stylesheets/**/*.css'],
        dest: './stylesheets/style_concat.css',
      }
    },

    cssmin: {
      my_target:{
        files: [{
          expand: true,
          // src: ['*.css', '!*.min.css'],
          cwd: './stylesheets/',
          src: ['style_concat.css'],
          dest: './stylesheets/',
          ext: '.min.css'
        }]
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express');

  // Default task (task(s) registration)
  // grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
  grunt.registerTask('default', ['compass', 'concat', 'cssmin']);
};
