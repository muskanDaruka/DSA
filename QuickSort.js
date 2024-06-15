const nums = [7, 2, 1, 6, 8, 5, 3, 4]
const start = 0;
const end = nums.length - 1

function partition(arr, start, end) {
    let piviot = arr[end]
    let pIndex = start

    for (let i = start; i < end; i++) {
        if (arr[i] <= piviot) {
            let temp = arr[i];
            arr[i] = arr[pIndex];
            arr[pIndex] = temp;
            pIndex++;
        }
    }
    let temp = arr[pIndex];
    arr[pIndex] = arr[end];
    arr[end] = temp;
    return pIndex;
}

function quickSort(arr, start, end) {
    if (start < end) {
        let partitionIndex = partition(arr, start, end);
        quickSort(arr, start, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, end);

    }
}
quickSort(nums, start, end);
console.log(nums);
