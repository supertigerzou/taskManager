'use strict';

/* Services */

var taskManagerServices = angular.module('taskManagerServices', ['ngResource']);

taskManagerServices.factory('Task', ['$resource',
  function($resource){
    return $resource('https://jira.englishtown.com/rest/api/2/issue/:taskId', {}, {
      query: {method:'GET', url:'tasks/tasks.json', isArray:true}
    });
  }]);
