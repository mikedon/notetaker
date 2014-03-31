'use strict';

angular.module('ntApp').controller('NotesCtrl', function ($scope) {
$scope.newNote = "";
    $scope.notes = ["don't forget to walk the dog", "pick up some pickles on the way home", "why do I always trip over my shoe laces?"];
	
	for (var i = 0; i < localStorage.length; i++) {
		
		var key = localStorage.key(i);
	
		$scope.notes.push(localStorage.getItem(key));
	}

    $scope.saveNote = function(){
		 localStorage.setItem(Date.now(), $scope.newNote);
		 $scope.notes.push($scope.newNote);
		 $scope.newNote = "";
    }
	
	//for convenience atm
	$scope.removeAll = function(){
		localStorage.clear();
		document.location.reload(true);
    }
  });
