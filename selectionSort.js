/*
1. take an input
2. create a function with parameter 
3. create an outer for loop 
    which will iterate from 0th index till length-1;
4. create one variable which will be the min
5. now create an inner for loop
    which will iterate from i+1 index till length;
6. one if condition which will see whether the arr [j] < arr[minIndex]
    if is it so minindex = j
7. swap arr[i] with j
8. return arr
n(n+1)/2
*/

const nums = [5, 3, 6, 8, 9, 2, 4]

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        if (i !== minIndex) {
            let temp = arr[i];
            arr[i] = arr[minIndex]
            arr[minIndex] = temp;
        }
    }
    return arr;
}
const output = selectionSort(nums)
console.log(output)