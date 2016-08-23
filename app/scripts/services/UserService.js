angular.module('AngularScaffold.Services').factory('UserService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'http://localhost:8000/';
		return {
				Register: function(payload){
	    		return $http.post(baseUrl + "v1/register", payload);
    		}

	    };
}]);
