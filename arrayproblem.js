function printReverse(arr) {
	for(let i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i]);
	}
}

printReverse([3,6,2,5]);

// isUniform() starts

function isUniform(arr){
	let first = arr[0];
	for(let i = 1; i < arr.length; i++){
	  if(arr[i] !== first){
			return false;
		}
	}
	return true;
}

// sumArray() starts

function sumArray(arr){
	let total = 0;
	arr.forEach(function(element){
		total += element;
	});
	return total;
}

// max() start

function max(arr){
	var max = arr[0];
	for(let i = 1; i < arr.length; i++){
		if(arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}