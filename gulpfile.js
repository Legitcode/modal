var gulp = require('gulp');
var initGulpTasks = require('react-component-gulp-tasks');

var taskConfig = {

  component: {
    name: 'simple-modal',
    dependencies: [
      'react'
    ],
    lib: 'build',
    less: {
      path: './less',
      entry: 'modal.less'
    }
  },

  example: {
    src: 'example/src',
    dist: 'example/dist',
    files: [
      'index.html',
      '.gitignore'
    ],
    scripts: [
      'example.js'
    ],
    less: [
        'modal.less'
    ]
  }

};

initGulpTasks(gulp, taskConfig);
