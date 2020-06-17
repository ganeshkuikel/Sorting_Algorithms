
export function do_insertion_sort(arr){
	let animations = [];
	let auxarray=arr.slice();
	insertion_sort(auxarray,animations);
	const javaScriptSortedArray = arr.slice().sort((a, b) => a - b);
    console.log("sort works correctly? ",arraysAreEqual(javaScriptSortedArray, auxarray));
	arr=auxarray;
	return [animations,arr];
}


function insertion_sort(arr,animations){
	let n = arr.length;
	for(let i=1;i<n;i++){
		let value=arr[i];
		let hole=i;
		animations.push(["firstcomp",hole-1,i]);
		animations.push(["secondcomp",hole-1,i]);
		while(hole>0 && arr[hole-1]>value){
			
			animations.push(["comparison",hole,arr[hole-1]]);
			arr[hole]=arr[hole-1];
			hole = hole-1;
			if(hole >= 0){
				animations.push(["firstcomp",hole,i]);
				animations.push(["secondcomp",hole,i]);

			}
		}
		animations.push(["comparison",hole,value]);

		arr[hole]=value;
	}
	// return arr;
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