angular.module('shortly.shorten', [])

.controller('ShortenController', function ($rootScope, $scope, $location, Links) {
  console.log('time for a shorten controller!');
  $scope.link = {};
  $scope.display = false;
  $scope.invalid = false;
  $rootScope.navable = true;
  $scope.addLink = function() {
    Links.addLink($scope.link)
      .then(function (resp) {
        console.log(resp);
        $scope.link = resp.data;
        $scope.display = true;
        $scope.invalid = false;
      })
      .catch(function (error) {
        $scope.invalid = true;
        console.error(error);
      });
  };

  // $scope.rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;
});
