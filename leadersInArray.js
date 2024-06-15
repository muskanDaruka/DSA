const arr = [16, 17, 4, 3, 5, 2];
let output = []
let max = arr[arr.length - 1];
output.push(max)
function leadersInArray(arr) {

    for (let i = arr.length - 2; i >= 0; i--) {

        if (arr[i] > max) {
            max = arr[i];
            output.push(max);
        }
    }

    console.log(output);
}
leadersInArray(arr)