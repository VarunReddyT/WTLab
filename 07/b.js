// 7b.
// Write a JavaScript program to implement Bubble Sort.

function bubbleSort(arr){
    let n = arr.length;
    let swapped;
    for(let i = 0;i<n-1;i++){
        swapped = false;
        for(let j = 0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped = true;
            }
        }
        if(!swapped){
            break;
        }
    }
    return arr;
}

let array = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", array);
let sortedArray = bubbleSort(array);
console.log("Sorted array:", sortedArray);