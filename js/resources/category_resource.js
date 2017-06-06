(function(){
	'use strict';
	const app = angular.module('todo');
	
	categoryResource = () => {
	
		let categories = ['Pluralsight', 'Consulting', 'Scouts', 'Home'];
		
		getCategories = () => categories;

		// es5 way	
		// return {
		// 	getCategories: getCategories
		// };

		// es6 way
		return {getCategories};
			
	}
	
	app.service('categoryResource', categoryResource)
}());