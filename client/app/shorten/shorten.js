angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  console.log('time for a shorten controller!');
  $scope.link = {};
  $scope.display = false;
  $scope.addLink = function() {
    // console.log('clicked!');
    Links.addLink($scope.link)
      .then(function (resp) {
        console.log(resp);
        $scope.link = resp.data;
        $scope.display = true;
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});
