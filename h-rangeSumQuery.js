const n = [3, 7, 2, 5, 8, 9];
const query = [[0, 5], [3, 5], [2, 4]];

function rangeSumQuery(arr, query) {
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

const output = rangeSumQuery(n, query);
console.log(output)
