/*
1. take one input array
2. create one function with parameters
3. for loop i = 1 till length
3. take one variable key which is the first element first index
4. one more variable j = i-1
5. while j>=0 and arr[j] greater than key value
6. arr[j+1] = arr[j]
7. j--
8. arr[j+1] = key
9. return arr
*/

const nums = [2, 7, 9, 4, 5, 3, 6]

function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key
    }
    return arr;
}
const output = insertionSort(nums);
console.log(output);