#GRUNT SUMMARY

GRUNT?
Grunt is JavaScript command-line interface task manager tool defined in a file (Gruntfile.js).
Grunt main purpose is to set an automation and frequency of running tasks e.g. file concatenation, compilation, unit testing or linting, Grunt is distributed via the Node Package Manage (npm).
Grunt has a significant number of plugins used to run routine tasks, the number of plugins is set to increase due to its popularity and convenience.

<!-- commonly
Gruntfile - that contains code to configure tasks, load existing plugins and/or create custom tasks.
Tasks are the modules that perform a specified job. They are defined in the Gruntfile. -->

GRUNT COMPETITORS:
- Ant, a Java-based build tool.
- Rake, a Ruby based tool with no predefined tasks.
- Gulp, a relatively recent JavaScript based task runner.

INSTALLATIONS
Gurnt is build on top of Node.js hence the later's installation is required in order to start using Grunt.

NODE.JS
Node.js can be installed by following the instructions on website https://nodejs.org/en/ or http://mg-nodeproj.herokuapp.com/ndjs for detailed installation.


GRUNT.JS
Once Node.js has been tested and is up and running Grunt.js can be install through npm by simply running commands below.

$ npm install -g grunt-cli

Here Grunt is installed with -g (global) flag which allows Grunt to be run from any directory.
Additionally Grunt requires two files gruntfile.js and package.json.


MODULE.EXPORTS FUNCTION
This wrapper function is required by grunt and its plugins.
All configuration are structured inside this function which will create a module and export it.

  module.exports = function(grunt) { };

GRUNT CONFIGURATION
This function contains all tasks configurations and the package.json file it relates to giving the possibility to use name and version (pkg.name)

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    //task(s) to be configured
    ...
  });


TASKS
A Grunt file can contain single or multiple tasks their role is run commonly needed
  aTask: { }


PLUGIN
Once all required tasks have been configured plugins related to each task ought to loaded.
This can be achieved by simply instructing Grunt to load a task through npm and by stating the plugin's name as a parameter. These plugins will be loaded from the package.json as instructed in the grunt.initConfig() function.

  grunt.loadNpmTasks('grunt-...-...');

PLUGIN SEARCH
Head to the Grunt's website https://gruntjs.com/plugins under plugins
1) Type in the search bar the plugin sought after and hit enter.
2) A list of all available plugins will be displayed, it is recommended to select a plugin that has a "grunt-contrib-" prefix and a start. These plugins are maintained and reliable.
3) Once the disired plugin selected you'll be directed to the npm website showing how to download it and additional information regarding it use.

TASKS REGISRATION
Finally tasks to be run have to be registered in order to be launch from the command line.
A default task can be set encompassing an array of tasks or individual tasks.

  grunt.registerTask('default', ['...', '...', '...']);

The following command will run the default task:
$ grunt

Running an individual task
  grunt.registerTask('concat-css', ['concat:css']);

['concat:css'] if the concat task contains multiple objects e.g. css, js ect... in this instance all none css extension will be ignored in the concatenation process.

To run a single task:
$ grunt taskName



RESOURCES
https://gruntjs.com
https://www.npmjs.com
https://www.tutorialspoint.com/grunt/grunt_pdf_version.pdf
http://www.johnchukwuma.com/training/GettingStartedWithGrunt.pdf
