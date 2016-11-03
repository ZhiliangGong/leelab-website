var app = angular.module('app',[]);

app.filter('reverse', function(){
  return function(items) {
    return items.slice().reverse();
  };
});

app.controller('newsSection', function($scope, $http) {
  $http.get("./data/news.json")
       .then(function (response) {$scope.news = response.data.news;});
});

app.controller('peopleSection', function($scope, $http) {
  $http.get("./data/people.json")
       .then(function (response) {$scope.people = response.data.people;});

});

app.controller('researchSection', function($scope, $http) {
  $http.get("./data/research.json")
       .then(function (response) {$scope.research = response.data.research;});
});

app.controller('alumniSection', function($scope, $http) {
  $http.get("./data/alumni.json")
       .then(function (response) {$scope.alumni = response.data.alumni;});
});

app.controller('publicationSection', function($scope, $http) {
  $http.get("./data/papers.json")
       .then(function (response) {$scope.papers = response.data.papers;});
});
