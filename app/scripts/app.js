'use strict';

angular.module('ntApp', [  
  'ngResource',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/notes.html',
        controller: 'NotesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
