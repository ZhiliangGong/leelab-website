var app = angular.module('app',[]);

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
