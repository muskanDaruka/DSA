/*
    1. create two function partition function and quicksort function 
    with parameter arg arr start end.
    2. partition function initialize variable piviot which is the end no. of the arr.
    3. one variable pIndex = start;
    4. one for loop will run from start till end-1
    5. if array of i is less than piviot than swap 
    6. and pindex will increase.
    7. otherwise pIndex will be swap with arr of i
    8. return pIndex
    another function quickSort if(start<end) than return 
        function pIndex = partion(arr, start, end)
        quickSort(arr, start, pIndex-1)
        quickSort(arr, pIndex+1, end)
*/

const nums = [2, 7, 9, 4, 5, 3, 6]

function quickSort(arr, start, end) {
    if (start >= end) {
        return;
    }
    let pIndex = partition(arr, start, end)
    quickSort(arr, start, pIndex - 1)
    quickSort(arr, pIndex + 1, end)

}
function partition(arr, start, end) {
    let piviot = arr[end]
    let pIndex = start
    for (let i = start; i < end; i++) {
        if (arr[i] <= piviot) {
            let temp = arr[i]
            arr[i] = arr[pIndex];
            arr[pIndex] = temp;
            pIndex++;
        }
    }
    let temp = arr[pIndex]
    arr[pIndex] = arr[end];
    arr[end] = temp;
    return pIndex;
}
quickSort(nums, 0, nums.length - 1);
console.log(nums);

