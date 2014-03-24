'use strict';

angular.module('ntApp').controller('NotesCtrl', function ($scope) {
	  $scope.newNote = {};
    $scope.notes = [{
    	txt : "don't forget to walk the dog"	
    },
    {   
    	txt : "pick up some pickles on the way home"
    },
    {
    	txt : "why do I always trip over my shoe laces?"
    }];
    $scope.saveNote = function(){
    	$scope.notes.push($scope.newNote)
    	$scope.newNote = {};
    }
  });
