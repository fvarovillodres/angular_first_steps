angular.module("MyHttpApp",[])
	.controller("HttpController",function($scope, $http){
		$scope.posts = [];
		$scope.newPost = {};
		$http.get("http://jsonplaceholder.typicode.com/posts")
			.then(function(response){
				console.log(response.data);
				$scope.posts = response.data;
			
			}),function(err){
				console.log(err);	
			};
		$scope.addPost = function(){
			$http.post("http://jsonplaceholder.typicode.com/posts",{
				title: $scope.newPost.title,
				body: $scope.newPost.body,
				userId: 1 
			})
			.then(function(response,status,headers,config){
				console.log(response);
				$scope.posts.push($scope.newPost);
				$scope.newPost = {};

			}),function(error,status,headers,config){
				console.log(err);	
			};
		}
	});