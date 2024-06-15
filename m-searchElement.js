const arr = [5, 6, 7, 8, 9, 10, 1, 2, 3]
const key = 3;

function searchElement(n) {
    for (i = 0; i < n.length; i++) {
        if (n[i] === key[i]) {
            return i;
        }
    }
    return -1;
}
const result = searchElement(arr)
console.log(result)