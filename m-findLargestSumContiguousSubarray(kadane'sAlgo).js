const arr = [10, -10, 20, -40];
const K = 6;

function findLargestSum() {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum = sum + arr[j];
            result.push(sum);
        }
    }

    result.sort((a, b) => b - a);

    return result[K - 1];
}

const largestSum = findLargestSum();
console.log(largestSum);
