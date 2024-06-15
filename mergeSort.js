/*
1. take an input variable
2. create a function with 3 parameters left, right, arr
3. initialize i = 0; j = 0; result = [];
4. while(i<left.length && j<right.length) will enter while loop
    if(left[i]<= right[j]){
        result.push(left[i]);
        i++;
    } else{
        result.push(right[j]);
        j++;
    }
6. add 2 more while loop, while the left length is finished or visa versa 
    while(i<left.length){
        result.push(left[i]);
        i++;
    }
    while(j<right.length){
        result.push(right[j]);
        j++;
    }
7. create one more function for mergeSort
    first condition : if(n<2)return
    1. initialize variable mid = n/2, left=arr.slice(0,mid), right.slice(mid)
    2. call recursive merge(mergeSort(left),mergeSort(right);
*/

const nums = [2, 7, 9, 4, 5, 3, 6]

function merge(left, right) {
    let i = 0;
    let j = 0;
    let result = []

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }
    return result;
}
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));

}
const output = mergeSort(nums)
console.log(output);
