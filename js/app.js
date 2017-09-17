var app = angular.module('widget', []);
app.controller('mainCtrl', function($scope,$http){
  $scope.widget = [];
  
  $http({
    method : 'get',
    url: 'https://crowscript.github.io/angular-widget/src/review.json'
  }).then(function(result){
    $scope.widget = result.data;
  },function(error){
    console.log(error);
  })
})