window.app = angular.module('SymphonyChallenge', ['ui.router', 'ui.bootstrap']);

app.config(function ($locationProvider, $urlRouterProvider) {
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');
});
