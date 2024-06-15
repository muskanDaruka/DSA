const arr = [-7, 1, 5, 2, -4, 3, 0]

function findEquilibriumIndex(n) {
    for (i = 0; i < n.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        for (j = 0; j < i; j++) {
            leftSum = leftSum + n[j]
        }
        for (j = i + 1; j < n.length; j++) {
            rightSum = rightSum + n[j]
        }
        if (leftSum === rightSum) {
            return i;
        }
    }
    return -1;
}
const result = findEquilibriumIndex(arr)
console.log(result)