angular.module('orderCloud')
	.controller('HomeCtrl', HomeController);

function HomeController(ocAppName, FeaturedProducts) {
	var vm = this;

	vm.featuredProducts = FeaturedProducts;

	vm.carousel = {
		Settings: {
			Interval: 5000,
			Active: 0,
			NoWrap: false
		},
		Slides: [{
				URL: 'assets/images/carousel1.jpg',
				ID: 0
			},
			{
				URL: 'assets/images/carousel2.jpg',
				ID: 1
			},
			{
				URL: 'assets/images/carousel3.jpg',
				ID: 2
			}
		]
	};
}