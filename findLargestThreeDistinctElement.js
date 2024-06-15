const arr = [10, 4, 3, 50, 23, 90]
if (n.length <= 2) {
    return -1;
}
arr.sort((a, b) = (b - a));

console.log(arr.slice(0, 3));
