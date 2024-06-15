const arr = [12, 35, 1, 10, 34, 1]
arr.sort((a, b) => a - b);
function findSecondLargestElement(n) {
    let max = n.length - 1;
    let secMax = 0;
    for (i = 0; i < n.length - 1; i++) {
        if (n[i] > secMax) {
            secMax = n[i];
        }
    }
    return secMax;

}
const output = findSecondLargestElement(arr);
console.log(output);