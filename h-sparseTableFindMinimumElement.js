const n = [7, 2, 3, 0, 5, 10, 3, 12, 18];
const query = [[0, 4], [4, 7], [7, 8]];

function findMinimumElement(arr, query) {
    const result = [];

    for (let i = 0; i < query.length; i++) {
        const [start, end] = query[i];
        let min = arr[start];

        for (let j = start; j <= end; j++) {
            if (arr[j] < min) {
                min = arr[j];
            }
        }

        result.push(min);
    }

    return result;
}

const output = findMinimumElement(n, query);
console.log(output)
