import React from 'react';
import  './SortingAlgorithms.css';
import {doAnimationBubbleSort} from './sortings/bubble_sorting.js';
import {doselectionSort} from './sortings/selection_sort.js';
import {do_insertion_sort} from './sortings/insertion_sort.js';
import {doMergeSortTask} from './sortings/merge_sort.js';

// Color of bar
const BAR_COLOR = 'green';
const SECONDARY_COLOR = 'red';
const ANIMATION_SPEED_MS = 10;
const ARRAY_LENGTH = 110;

 class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }


componentDidMount() {
	this.resetAllArray();
}
resetAllArray () {
	const array = [];
	for (let i=0;i <ARRAY_LENGTH; i++){
		array.push(generateRandomNumbers(5,500));
	}
	this.setState({array});
}

bubbleSort() {
        const [animations] = doAnimationBubbleSort(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = (i % 4 === 0) || (i % 4 === 1);
            const arrayBars = document.getElementsByClassName('array-bar');
            if(isColorChange ) {
                const color = (i % 4 === 0) ? SECONDARY_COLOR : BAR_COLOR;
                const [barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i * ANIMATION_SPEED_MS);
            }
            else {
                const [barIndex, newHeight] = animations[i];
                if (barIndex === -1) {
                    continue;
                }
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                },i * ANIMATION_SPEED_MS);  
            }
        }
        
    }

 selectionSort() {
        const [animations] = doselectionSort(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = (animations[i][0] === "firstcomp") || (animations[i][0] === "secondcomp");
            const arrayBars = document.getElementsByClassName('array-bar');
            if(isColorChange === true) {
                const color = (animations[i][0] === "firstcomp") ? SECONDARY_COLOR :  BAR_COLOR;
                const [temp, barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i * ANIMATION_SPEED_MS);
            }
            else {
                const [temp, barIndex, newHeight] = animations[i];
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                },i * ANIMATION_SPEED_MS);  
            }
        }
        
    }

insertionSort(){
    const [animations] = do_insertion_sort(this.state.array);
    for (let i=0;i<animations.length;i++){
        const isColorChange = (animations[i][0] === "firstcomp")||(animations[i][0]==="secondcomp");
        const arrayBars = document.getElementsByClassName("array-bar");
        if (isColorChange === true){
            const color = (animations[i][0] === "firstcomp") ? SECONDARY_COLOR:BAR_COLOR;
            const [temp,barOneIndex,barTwoIndex]=animations[i];
            const barOneStyle = arrayBars[barOneIndex].style;
            const barTwoStyle = arrayBars[barTwoIndex].style;
            setTimeout (()=>{
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;

            },i*ANIMATION_SPEED_MS);
        }
        else{
            const [temp, barIndex, newHeight] = animations[i];
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                },i * ANIMATION_SPEED_MS);  
        }
}
}

  mergeSort() {
    const [animations] =doMergeSortTask(this.state.array);
    for (let i =0;i<animations.length;i++){
        const isColorChange = (i % 3 !== 2);
        const arrayBars = document.getElementsByClassName("array-bar");
        if (isColorChange  === true){
            const color = (i % 3 === 0) ? SECONDARY_COLOR:BAR_COLOR;
            const [barOneIndex,barTwoIndex]=animations[i];
            const barOneStyle = arrayBars[barOneIndex].style;
            const barTwoStyle = arrayBars[barTwoIndex].style;

            setTimeout(()=>{
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            },i*ANIMATION_SPEED_MS);
        } else{
            const [barIndex,newHeight] = animations[i];
            const barStyle = arrayBars[barIndex].style;
            setTimeout(()=>{
                barStyle.height = `${newHeight}px`;
            },i*ANIMATION_SPEED_MS);
        }
    }       
    }




render () {
	const {array,isRunning,} =this.state;
     const speed = 570 - Math.pow(array.length, 2) > 0 ?
      570 - Math.pow(array.length, 2) : 0;

     const color = isRunning ? "rgba(214, 29, 29, 0.8)" : "black";

     const cursor = isRunning ? "auto" : "pointer";
	return (
		<div className="array-container" > 
		{array.map((value,idx) => (
			<div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: BAR_COLOR,color: color, cursor: cursor,
              height: `${value}px`,
            }} ></div>
			))}
			<button style={{  margin:'20px' }}  onClick={() => this.resetAllArray()}> 
			Generate Random Numbers</button>
			<button  id = "bubbleSort" style={{position:'relative'}} onClick={() => this.bubbleSort() }>
			Bubble Sort</button>
            <button  id = "selectionSort" style={{position:'relative', margin:'20px'}} onClick={() => this.selectionSort() }>
            Selection Sort</button>
            <button  id = "insertionSort" style={{position:'relative', margin:'20px'}} onClick={() => this.insertionSort() }>
            Insetion Sort</button>
            <button  id = "mergeSort" style={{position:'relative', margin:'20px'}} onClick={() => this.mergeSort() }>
            Merge Sort</button>


            <div className="finised" style={{ display:"none", }}>Hello</div> 


			
		</div>

		);
	}
}

function generateRandomNumbers(min,max) {
		 // Including all minimum and maximum number
	return Math.floor(Math.random() * (max - min + 1)+min);
	}

export default SortingVisualizer;