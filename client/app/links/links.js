angular.module('shortly.links', [])

.controller('LinksController', function ($rootScope, $scope, Links) {
  $scope.data = {};
  $rootScope.navable = true;
  // Called when controller is loaded
  $scope.getLinks = function(){
    console.log('controller wants links!');
    Links.getLinks().then(function(links) {
      console.log(links);
      $scope.data.links = links;
    });
  };
  $scope.getLinks();
});
