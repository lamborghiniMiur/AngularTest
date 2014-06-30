/**
 *
 */

function HelloController($scope) {
	$scope.greeting = {text: "Hello"};
}

function CartController($scope) {
	$scope.items = [
	                {title:"ペイントポット", quantity:8, price:3.95},
	                {title:"ポルカドット", quantity:17, price:12.95},
	                {title:"ぺブル", quantity:5, price:6.95}
	                ];
	$scope.remove = function(index) {
		$scope.items.splice(index,1);
	}
}