
export function doMergeSortTask(mainarray){
	let animations = [];
	let arr = mainarray.slice();
	divide_merge_sort(arr,0,arr.length-1,animations);
	const javaScriptSortedArray = mainarray.slice().sort((a, b) => a - b);
    console.log(arraysAreEqual(javaScriptSortedArray, arr));
	return[animations,mainarray];
}

function divide_merge_sort(arr,start,end,animations){
	if (start === end) return;

	let mid = Math.floor((start+end)/2);
	// For left half
	divide_merge_sort(arr,start,mid,animations);
	// For right half
	divide_merge_sort(arr,mid+1,end,animations);
	perform_merge(arr,start,mid,end,animations);
}



function perform_merge(arr,start,mid,end,animations){
	let sorted = [];
	let i=start,
	j=mid+1;

	while(i <= mid && j <= end){
		// Compare values and change their color
		animations.push([i,j]);
		// Now again change their color
		animations.push([i,j]);

		if(arr[i] <= arr[j]){
			// overriding sorted length's (i+start)th index with ith index
			animations.push([sorted.length+start,arr[i]]);
			sorted.push(arr[i++]);
		}
		else{
			// overriding sorted length's (j+start)th index with jth index
			animations.push([sorted.length+start,arr[j]]);
			sorted.push(arr[j++]);
		}
	}
	while(i <= mid){
		animations.push([i,i]);
		animations.push([i,i]);
		animations.push([sorted.length + start, arr[i]]);
        sorted.push(arr[i++]);
	}
	while(j <= end){
		animations.push([j,j]);
		animations.push([j,j]);
		animations.push([sorted.length+start,arr[j]]);
		sorted.push(arr[j++]);
	}
	for (let i = start; i<=end;i++){
		arr[i] = sorted[i-start];
	}
}

function arraysAreEqual(firstArray, secondArray) {
    if (firstArray.length !== secondArray.length) {
        return false;
    }
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
        return false;
      }
    }
    return true;
}