app.factory('ProductsFactory', function($http, $log) {

	return {
		getAllProducts: function() {
			return $http.get('http://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js')
			.then(function(response) {
				return response.data.products;
			})
		},
		productFilter: function(product) {
			if (product.defaultPriceInCents / 100 < 20) return true;
			return false;
		}
	}
});
