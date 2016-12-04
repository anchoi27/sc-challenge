app.factory('ProductsFactory', function($http, $log) {
	var url ='https://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js?callback=JSON_CALLBACK';

	return {
		getAllProducts: function() {
			return $http({
				method: 'GET',
				url: url,
				headers: {
					'Content-type': 'application/json'
				}
				}).then(function (response) {
					return response.data.products;
				}).catch($log.error);}
		,
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
