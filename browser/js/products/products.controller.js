app.controller('ProductsController', function($state, $scope, $log, ProductsFactory) {

	ProductsFactory.getAllProducts()
	.then(function (data) {
		$scope.products = data;
	})
	.catch($log.error);

	$scope.productFilter = ProductsFactory.productFilter;

	$scope.sortProducts = function(products, attribute) {

		products.sort(function(a, b) {
			a = parseInt(a[attribute]);
			b = parseInt(b[attribute]);
			return a - b;
		});
		$scope.products = products;

		return array;
	};

});
