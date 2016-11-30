app.controller('ProductsController', function($scope, $log, ProductsFactory) {

	$scope.getAllProducts = function () {
		ProductsFactory.getAllProducts()
		.then(function (data) {
		$scope.products = data;
		})
		.catch($log.error);
	};

	$scope.getAllProducts();
	$scope.filter = {
		number: null
	}

	//Filtering rules
	$scope.productFilter = function(products, type) {
		var filteredProducts = [];
		products.forEach(function (product) {
			if (ProductsFactory.productFilter(product, type, $scope.filter.number)) {
				return filteredProducts.push(product);
			}
		});
		$scope.products = filteredProducts;
	}

	$scope.productFilterRule = ProductsFactory.productFilterRule;

	$scope.changeFilterType = function () {
		$scope.filter.type = ProductsFactory.productFilterRule($scope.filter.rule);
	}

	//Sorting rule
	$scope.sortProducts = function(display, products, attribute, reverse) {
		$scope.sortingRule = display;

		if (attribute !== 'name') {
			products.sort(function(element1, element2) {
				element1 = parseInt(element1[attribute], 10);
				element2 = parseInt(element2[attribute], 10);
				return element1 - element2;
			});
		} else {
			// sort products alphabetically
			products.sort(function(element1, element2) {
				return element1[attribute] > element2[attribute];
			});
		}

		if (reverse) {
			$scope.products = products.reverse();
		} else {
			$scope.products = products;
		}
	};

});
