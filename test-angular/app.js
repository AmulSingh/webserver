(function(){
    var app = angular.module('todoApp',['ngRoute']);
    app.config(function($routeProvider){
        $routeProvider.when('/',{
            controller:'defaultController',
            templateUrl:'/template/hell.html'
        })
        .when('/todo',{
            controller:'todoController',
            templateUrl:'/template/todo.html'
        })
        .otherwise({redirectTo:'/'});
    });
}());