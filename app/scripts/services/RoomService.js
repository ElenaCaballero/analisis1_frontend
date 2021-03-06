angular.module('AngularScaffold.Services').factory('RoomService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		//var baseUrl = 'https://bodega-emelina-backend.herokuapp.com/';
		var baseUrl = 'http://localhost:8000/';
		return {
			GetEmpleado: function(){
	      		return $http.get(baseUrl + "v1/getEmployees");
      		},
			CreateRoom: function(payload){
	      		return $http.post(baseUrl + "v1/registerRoom",payload);
      		},
			GetRooms: function(){
	      		return $http.get(baseUrl + "v1/getAllRooms");
      		},
			UpdateRoom: function(payload){
	      		return $http.post(baseUrl + "v1/updateRoom",payload);
      		},
      		SaveDistributedRooms: function(payload){
      			return $http.post(baseUrl + "v1/saveDistributedRooms",payload);
      		},
      		SwapDistributedRooms: function(payload){
      			return $http.post(baseUrl + "v1/swapDistributedRooms",payload);
      		},
      		GetEmpRooms: function(payload){
	      		return $http.post(baseUrl + "v1/getRoomEmpleado",payload);
      		}
      	}
      	
	}
]);