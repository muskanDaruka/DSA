const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

function kadaneSubarray(nums) {
    let sum = 0;
    let maxSum = nums[0];
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
        if (sum > maxSum) {
            maxSum = sum;
        }
        if (sum < 0) {
            sum = 0;
        }
    }
    return maxSum;
}

const output = kadaneSubarray(arr)
console.log(output);