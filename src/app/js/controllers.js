'use strict';

/* Controllers */

var taskManagerControllers = angular.module('taskManagerControllers', []);

taskManagerControllers.controller('TaskListCtrl', ['$scope', 'Task',
  function($scope, Task) {
    $scope.tasks = Task.query();
    $scope.orderProp = 'id';
  }]);

taskManagerControllers.controller('TaskDetailCtrl', ['$scope', '$routeParams', 'Task',
  function($scope, $routeParams, Task) {
    $scope.task = Task.get({taskId: $routeParams.taskId}, function(task) {
      $scope.mainImageUrl = task.assignee.avatarUrls[3];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);
