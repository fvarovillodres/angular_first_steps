var app = angular.module("MyFirstApp",[]);
app.controller("FirstController",function($scope){
	$scope.nombre = "Marisa";
	$scope.comentarios = [
		{
			comentario: "Linux mola",
			username: "Paco"
		},
		{
			comentario: "Python is very modular",
			username: "Alfresco"
		}
	];
	$scope.nuevoComentario = {};
	$scope.agregarComentario = function() {
		$scope.comentarios.push($scope.nuevoComentario);
		$scope.nuevoComentario = {};
	}
		
});