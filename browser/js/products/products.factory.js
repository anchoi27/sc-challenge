app.factory('ProductsFactory', function($http) {

	return {
		getAllProducts: function() {
			return $http.get('http://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js')
			.then(function(response) {
				return response.data.products;
			})
		},
		productFilter: function(product, type, num) {
			var price = product.defaultPriceInCents / 100;
			if (type === 'under') {
				if (price <= +num) return true;
			} else if (type === 'over') {
				if (price > +num) return true;
			} else {
				return false;
			}
		}
	}
});
