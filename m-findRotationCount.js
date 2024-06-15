const arr = [7, 9, 11, 12, 5]

function findRotationCount(n) {
    let min = arr[0]
    let minIndex = 0;
    for (i = 0; i < n.length; i++) {
        if (n[i] < min) {
            min = n[i];
            minIndex = i;
        }
    }
    return minIndex;
}
const result = findRotationCount(arr)
console.log(result);