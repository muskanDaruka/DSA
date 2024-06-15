/*
[2,5,1,7,9]
1. we will take array as an input
2. create one function which will take one parameter nums
3. there will be 2 for loop 
    1. one outer window and the 
    2. another one will be the inner loop
4. i will be iterate from 0th index till last element;
5. j will be iterate from 0th index till last element-1-i;
6. nums[j] > nums[j+1]
    than will swap
7. return nums;
8. at the end invoke the function
n(n+1)/2 n^2+n/2
*/

const arr = [2]

function bubbleSort(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                let temp = nums[j]
                nums[j] = nums[j + 1]
                nums[j + 1] = temp;
            }
        }
    }
    return nums;
}
const output = bubbleSort(arr)
console.log(output);
[]