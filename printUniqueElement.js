const arr = [12, 10, 9, 45, 2, 10, 10, 45]

function printUniqueElement(n) {
    let uniqueArr = [];
    for (i = 0; i < n.length; i++) {
        let isFound = false;
        for (j = 0; j < uniqueArr.length; j++) {
            if (n[i] === uniqueArr[j]) {
                isFound = true;
                break;
            }
        }
        if (isFound === false) {
            uniqueArr.push(n[i]);
        }
    }
    return uniqueArr;
}
const result = printUniqueElement(arr)
console.log(result);



