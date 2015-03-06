angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};

  // Called when controller is loaded
  $scope.getLinks = function(){
    console.log('controller wants links!');
    Links.getLinks().then(function(links) {
      $scope.data.links = links;
    });
  };
  $scope.getLinks();
  // $scope.$on('$viewContentLoaded', $scope.getLinks);
});
