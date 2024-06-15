const n = [1, 5, 2, 4, 6, 1, 3, 5, 7, 10];
const query = [[3, 8], [1, 6], [8, 8]];

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
