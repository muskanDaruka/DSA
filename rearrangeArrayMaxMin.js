const arr = [1, 2, 3, 4, 5, 6, 7]
const result = [];
let left = 0;
let right = arr.length - 1;
function rearrangeArray(n) {
    while (left <= right) {
        result.push(arr[right]);
        result.push(arr[left]);
        left++;
        right--;
    }

    if (left === right) {
        result.push(arr[left]);
    }

    return result;
}

const output = rearrangeArrayMaxMin(arr)
console.log(output);