(function(){
	'use strict';
	const app = angular.module('todo');
	
	categoryCtrl = (categoryResource) => {
		let ctrl = this;

		ctrl.categories = categoryResource.getCategories();
		
		ctrl.newCategory = () => {
			if (ctrl.newCategoryName === ''){
				return;
			}
			
			ctrl.categories.push(ctrl.newCategoryName);
		
			ctrl.newCategoryName = '';
		};
	}
	
	app.controller('categoryCtrl', categoryCtrl);
	
}());