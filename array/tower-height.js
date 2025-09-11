const towerHeight = (arr, k) => {
    arr.sort((a, b) => a - b);
  let min = arr[0];
  let max = arr[arr.length - 1];
  if (k >= max - min || k === max - min) {
    return 0;
  } else {
    if (((max - k) - (min + k)) <= 0) {
        return 0;
    } else {
      return(max - k) - (min + k)
    }
  }
};

const arr = [1, 5, 8, 10];
const k = 2;
const op = towerHeight(arr, k);
console.log(op);
