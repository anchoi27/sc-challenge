app.controller('ProductsController', function($scope, $log, ProductsFactory) {

	ProductsFactory.getAllProducts()
	.then(function (data) {
		$scope.products = data;
	})
	.catch($log.error);

	$scope.productFilter = ProductsFactory.productFilter;

	$scope.sortProducts = function(display, products, attribute, reverse) {
		$scope.sortingRule = display;
		
		if (attribute !== 'name') {
			products.sort(function(element1, element2) {
				element1 = parseInt(element1[attribute], 10);
				element2 = parseInt(element2[attribute], 10);
				return element1 - element2;
			});
		} else {
			products.sort(function(element1, element2) {
				return element1[attribute] > element2[attribute];
			});
		}

		if (reverse === 'reverse') {
			$scope.products = products.reverse();
		} else {
			$scope.products = products;
		}
	};

});
