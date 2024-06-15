// const arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];
// // console.log(arr.sort((a, b) => a - b))

// function sortArray() {
//     let mid = 0;
//     let low = 0;
//     let high = arr.length - 1
//     while (mid <= high) {
//         if (arr[mid] === 0) {
//             let temp = arr[low];
//             arr[low] = arr[mid];
//             arr[mid] = temp;
//             low++;
//             mid++;
//         }
//         else if (arr[mid] === 1) {
//             mid++;
//         }
//         else {
//             let temp = arr[mid];
//             arr[mid] = arr[high];
//             arr[high] = temp;
//             high--;
//         }

//     }
//     return arr;
// }
// const result = sortArray()
// console.log(result)



// const arr = [4,6,4,2,6,4,2]

// function sortArray(n){
// 	let low = 0
//   let mid = 1
//   let high = n.length-1

//   while(mid<=high){
//   	if(n[mid]===2){
//     	let temp = arr[low];
//       arr[low] = arr[mid];
//       arr[mid] = temp;
//       low++;
//       mid++;
//     }
//     if(n[mid]===4){
//       mid++;
//     } else {
//       let temp = arr[mid];
//       arr[mid] = arr[high];
//       arr[high] = temp;
//       high--;

//     }

//   }
//   return n;

// }
// const output = sortArray(arr);
// console.log(output);



const arr = [4, 6, 4, 6, 4]

function sortArray(n) {
    let low = 0
    let mid = 1


    while (mid >= low) {
        if (n[mid] === 4) {
            let temp = n[mid];
            n[mid] = n[low];
            n[low] = temp;
            low++;
            mid++;
        } else {
            mid++;
        }

    }
    return n;

}
const output = sortArray(arr);
console.log(output);