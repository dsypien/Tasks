'use strict';

/**
 * @ngdoc overview
 * @name tasksApp
 * @description
 * # tasksApp
 *
 * Main module of the application.
 */
angular
  .module('tasksApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/project/:index', {
        templateUrl: 'views/tasks.html',
        controller: 'TasksCtrl'
      })
      .when('/projects',{
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/projects'
      });
  })
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }]);
