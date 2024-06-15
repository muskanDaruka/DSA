const arr = [7, 10, 11, 5, 2, 5, 5, 7, 11, 8, 9]
const k = 4

function print_N_mostFrequentNumber(n, k) {
    const hash = {}
    for (i = 0; i < n.length; i++) {
        if (hash[n[i]]) {
            hash[n[i]]++;
        } else {
            hash[n[i]] = 1;
        }
    }
    let uniqueNumbers = []
    for (let key in hash) {
        uniqueNumbers.push(key);
    }

    uniqueNumbers.sort((a, b) => {
        if (hash[a] === hash[b]) {
            return b - a;                //sort by value
        }
        return hash[b] - hash[a];       //sort by freq
    });

    const result = uniqueNumbers.slice(0, k);

    return result;

}
const output = print_N_mostFrequentNumber(arr, k)
console.log(output)