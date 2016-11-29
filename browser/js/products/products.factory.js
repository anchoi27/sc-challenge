app.factory('ProductsFactory', function($http) {

	return {
		getAllProducts: function() {
			return $http.get('http://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js')
			.then(function(response) {
				return response.data.products;
			})
		},
		productFilter: function(product, rule, num) {
			var price = product.defaultPriceInCents / 100;
			if (rule === 'under') {
				if (price <= +num) return true;
			} else if (rule === 'over') {
				if (price > +num) return true;
			} else {
				return false;
			}
		}
	}
});
