export function doAnimationBubbleSort(mainarray) {
    let animations  = [];
    let auxillaryArray = mainarray.slice();
    bubbleSort(auxillaryArray, animations);
    mainarray = auxillaryArray;
    return [animations, mainarray];
}

function bubbleSort(auxillaryArray, animations) {
    const N = auxillaryArray.length;
    for (let i = 0; i < N - 1; i++) {
        for (let j = 0; j < N - i -1; j++) {
            animations.push([j, j + 1]);
            animations.push([j, j + 1]);
            if (auxillaryArray[j] > auxillaryArray[j + 1]) {
                animations.push([j, auxillaryArray[j + 1]]);
                animations.push([j + 1, auxillaryArray[j]]);


                let temp = auxillaryArray[j];
                auxillaryArray[j]=auxillaryArray[j+1];
                auxillaryArray[j+1]=temp;
            }
            else {
                animations.push([-1, -1]);
                animations.push([-1, -1]);            }
        }
    }
}





