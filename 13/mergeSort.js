// 13.
// You are given two sorted arrays, arr1 and arr2. Your task is to merge these two arrays into a single sorted 
// array. Both input arrays are already sorted in non-decreasing order. The output should also be a sorted array 
// that contains all elements from both arr1 and arr2.
// Sample Input:
// 1 3 5
// 2 4 6
// Sample Output:
// 1 2 3 4 5 6

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mergeSortedArrays(arr1,arr2){
    const mergedArray = [];
    let i = 0;
    let j = 0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            mergedArray.push(arr1[i]);
            i++;
        }else{
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    while(i<arr1.length){
        mergedArray.push(arr1[i]);
        i++;
    }
    while(j<arr2.length){
        mergedArray.push(arr2[j]);
        j++;
    }
    return mergedArray;
}

rl.question('Enter array 1 (space seperated) : ', (input1) => {
    const arr1 = input1.split(' ').map(Number);
    rl.question('Enter array 2 (space seperated) : ', (input2) => {
        const arr2 = input2.split(' ').map(Number);
        const mergedArray = mergeSortedArrays(arr1, arr2);
        console.log("merge sorted array : " + mergedArray.join(' '));
        rl.close();
    });
});