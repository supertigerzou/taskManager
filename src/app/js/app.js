'use strict';

/* App Module */

var taskManagerApp = angular.module('taskManagerApp', [
  'ngRoute',
  'taskManagerAnimations',
  'taskManagerControllers',
  'taskManagerFilters',
  'taskManagerServices'
]);

taskManagerApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/tasks', {
        templateUrl: 'partials/task-list.html',
        controller: 'TaskListCtrl'
      }).
      when('/tasks/:taskId', {
        templateUrl: 'partials/task-detail.html',
        controller: 'TaskDetailCtrl'
      }).
      when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl'
      }).
      otherwise({
        redirectTo: '/tasks'
      });
  }]);
