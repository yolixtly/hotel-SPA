//if you have or not dependencies specify it within the array.
// this is part of the module setter syntax
angular.module('myApp', ['ngRoute'])
	.config(config)

function config ($routeProvider){
		$routeProvider.when('/', {
			template: '<h1>this is the main page Yolix!!</h1>'
		}).when('/about', {
			template: '<h1> this is the about page </h1>'
		})
}