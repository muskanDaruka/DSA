const arr = [2, 3, 5, 4, 5, 3, 4]

const hash = {}

function findElementAppearsOnce(n) {
    for (i = 0; i < n.length; i++) {
        if (!hash[n[i]]) {
            hash[n[i]] = 1;
        } else {
            hash[n[i]]++;
        }
    }
    for (let key in hash) {
        if (hash[key] === 1) {
            return key;
        }
    }
}
const result = findElementAppearsOnce(arr)
console.log(result)