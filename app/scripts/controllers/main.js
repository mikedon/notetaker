'use strict';

angular.module('ntApp').controller('NotesCtrl', function ($scope, $http) {
	$scope.newNote = "";
    $scope.notes = ["don't forget to walk the dog", "pick up some pickles on the way home", "why do I always trip over my shoe laces?"];
	
	var serviceUrl = "http://localhost:8080/notetaker/api/note/";
	
	$http.get(serviceUrl + 'query').
        success(function(data) {
			for (var i = 0; i < data.length; i++) {
						$scope.notes.push(data[i].message);
			}
        }).
		error(function(error, status) {
        alert(status + error.message);
    });

    $scope.saveNote = function(){
		 $http.post(serviceUrl, $scope.newNote);
		 $scope.notes.push($scope.newNote);
		 $scope.newNote = "";
    }
  });
