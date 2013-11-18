angular.module("umbraco")
    .controller("Nibble.MatrixEditor",
    function ($scope) {

		 if (!$scope.model.value) {
			$scope.model.value = createArray(parseInt($scope.model.config.rows), parseInt($scope.model.config.cols));
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