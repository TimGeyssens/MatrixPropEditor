angular.module("umbraco")
    .controller("Nibble.MatrixLabelEditor",
    function ($scope,editorState) {

	$scope.current = editorState.current;
	$scope.rows = _.where($scope.current.preValues, {key: "rows"})[0];
	$scope.cols = _.where($scope.current.preValues, {key: "cols"})[0];


	if(!$scope.model.value){
		$scope.model.value = {};
		$scope.model.value.rowlabels = createArray(parseInt($scope.rows.value));
		$scope.model.value.collabels = createArray(parseInt($scope.cols.value));
	}
	else
	{
		//check if we need to add/remove labels
		updateLabels();
	}

	function updateLabels(){
		var rowcount = parseInt($scope.rows.value);

		if($scope.model.value.rowlabels.length != rowcount)
		{
			if($scope.model.value.rowlabels.length < rowcount){
				var i = 0;
				while (i<rowcount-$scope.model.value.rowlabels.length)
  				{
					$scope.model.value.rowlabels.push("");
					i++
				}
			}
			else
			{	var i = 0;

				while (i<=$scope.model.value.rowlabels.length-rowcount)
				{
					$scope.model.value.rowlabels.pop();
					i++
				}
			}

		}


		var colcount = parseInt($scope.cols.value);
		if($scope.model.value.collabels.length != colcount)
		{
			if($scope.model.value.collabels.length < colcount){
				var i = 0;
				while (i<colcount-$scope.model.value.collabels.length)
  				{
					$scope.model.value.collabels.push("");
					i++
				}
			}
			else
			{	var i = 0;

				while (i<=$scope.model.value.collabels.length-colcount)
				{

					$scope.model.value.collabels.pop();
					i++
				}
			}

		}
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

