const n = [1, 1, 2, 1, 3, 4, 5, 2, 8];
const query = [[0, 4], [1, 3], [2, 4]];

function printQuerySum(arr, query) {
    const result = [];

    for (let i = 0; i < query.length; i++) {
        const [start, end] = query[i];
        let sum = 0;

        for (let j = start; j <= end; j++) {
            sum = sum + arr[j];
        }

        result.push(sum);
    }

    return result;
}

const output = printQuerySum(n, query);
console.log(output)
