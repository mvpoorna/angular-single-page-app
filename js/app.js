var app = angular .module('spaApp', ['ngRoute']);

app.controller('mainController', ['$scope', '$location', function($scope, $location) { 
	$scope.isActive = function (viewLocation) { 
		return $location.path().indexOf(viewLocation) == 0; 
	}; 
}]);

app.controller('homeController', ['$scope', function($scope) { 
	$scope.message = 'Home Page'; 
}]);

app.controller('aboutController', ['$scope', function($scope) { 
	$scope.message = 'About Page'; 
}]);

app.controller('contactController', ['$scope', function($scope) { 
	$scope.message = 'Contact Page'; 
}]);
				
// configure the routes 
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) { 
	// use the HTML5 History API to remove the '#' from the URL (doesn't work with IE < 10) 
	//$locationProvider.html5Mode(true); 
	$routeProvider.when('/home', { 
						// route for the home page 
						controller : 'homeController',
						templateUrl : 'html/homePage.html'
						 }) 
		.when('/about', { 
						// route for the about page 
						controller : 'aboutController',
						templateUrl : 'html/aboutPage.html' 
						 }) 
		.when('/contact', { 
						// route for the contact page 
						controller : 'contactController',
						templateUrl : 'html/contactPage.html'
						 }) 
		.otherwise( {redirectTo: '/home'} ); 
}]) ;