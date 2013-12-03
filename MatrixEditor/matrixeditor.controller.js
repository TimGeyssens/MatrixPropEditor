angular.module("umbraco")
    .controller("Nibble.MatrixEditor",
    function ($scope) {



		var rows = 2;

		var cols = 2;

		if($scope.model.config != null){
		if($scope.model.config.rows != null){rows = parseInt($scope.model.config.rows)}
		if($scope.model.config.cols != null){rows = parseInt($scope.model.config.cols)}
		}
		 if (!$scope.model.value) {
			$scope.model.value = createArray(rows, cols);
         }


		 function createArray(length) {
		     var arr = new Array(length || 0),
		         i = length;

		     if (arguments.length > 1) {
		         var args = Array.prototype.slice.call(arguments, 1);
		         while(i--) arr[length-1 - i] = createArray.apply(this, args);
		     }

		     return arr;
		}

    });