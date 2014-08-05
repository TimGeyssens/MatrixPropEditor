angular.module("umbraco")
    .controller("Nibble.MatrixEditor",
    function ($scope) {

		var rows = 2;
		var cols = 2;

		if($scope.model.config != null){
		if($scope.model.config.rows != null){rows = parseInt($scope.model.config.rows)}
		if($scope.model.config.cols != null){cols = parseInt($scope.model.config.cols)}
		}
		 if (!$scope.model.value) {
			$scope.model.value = createArray(rows, cols);
         }



	    $scope.canAddRow = function () {
	        if (isNaN(parseInt($scope.model.config.maxRows, 10))) {
	            return true;
	        }

        	return ($scope.model.config.maxRows > $scope.model.value.length);
    	}

	    $scope.addRow = function ($index) {
        	var newRow = [];
            newRow = createArray(cols);
            $scope.model.value.splice($index + 1, 0, newRow);
    	}

    	$scope.canRemoveRow = function () {
        	return ($scope.model.value.length > 1);
    	}

	    //remove a row from the model
	    $scope.removeRow = function ($index) {
	        if ($scope.model.value.length > 1) {
	            if (confirm('Are you sure you want to remove this?')) {
	                $scope.model.value.splice($index, 1);
	            }
	        }
	    }

	    $scope.canSort = function () {
        	return ($scope.model.value.length > 1);
    	}
	 
	    //sort config  
	    $scope.sortableOptions = {
	        axis: 'y',
	        cursor: "move",
	        handle: ".handle",
	        update: function (ev, ui) {
	 
	        },
	        stop: function (ev, ui) {
	 
	        }
	    };
		

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