const maximuSubArr = (arr) => {
  let max = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (sum > max) {
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
};

const arr = [2, 3, -8, 7, -1, -90, 3];
const op = maximuSubArr(arr);
console.log(op);

// my way
// let max=0;
// let crr=0;
// for(let i =0;i<arr.length;i++){
//     crr=0;
//     for(let j = i ; j<arr.length;j++ ){
//         crr=crr+arr[j]
//         if(crr>max){
//             max=crr;
//         }
//     }
// }
// return max
