

export function doselectionSort(array) {
    let animations  = [];
    let auxillaryArray = array.slice();
    selectionSort(auxillaryArray, animations);
    const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
    console.log("sort works correctly? ",arraysAreEqual(javaScriptSortedArray, auxillaryArray));
    array = auxillaryArray;
    return [animations, array];
}

function selectionSort(arr, animations) {
    const n = arr.length;
    for (let i=0;i<n-1;i++){
     	let pos = i;
    		for (let j=i+1;j<n;j++){
     		animations.push(["firstcomp",j,pos]);
     		animations.push(["secondcomp",j,pos]);
     		if (arr[j]<arr[pos]){
     			pos=j;
     		}
     	}
     	animations.push(["temp",pos,arr[i]]);
     	animations.push(["temp",i,arr[pos]]);
     	let temp = arr[i];
     	arr[i] = arr[pos];
     	arr[pos] = temp;
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