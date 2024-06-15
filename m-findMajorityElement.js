const arr = [3, 4, 3, 2, 4, 4, 4, 4]

const hash = {}

function findMajority(n) {
    for (i = 0; i < n.length; i++) {
        if (hash[n[i]]) {
            hash[n[i]]++;
        } else {
            hash[n[i]] = 1;
        }
    }
    for (let key in hash) {
        if (hash[key] > (n.length / 2)) {
            return key;
        }
    }
    return -1;
}
const result = findMajority(arr)
console.log(result);