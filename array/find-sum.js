const findSum = (sum, arr) => {
    let sumDiff = new Map()
  for (let i = 0; i < arr.length; i++) {
    let diff = sum - arr[i];
      if(sumDiff.has(diff)){
          return [sumDiff.get(diff),i]
      }
      sumDiff.set(arr[i],i)
    }
  return []; 
  }
const inputArr=[2,5,1,9,5];
const inputSum = 10;
const output = findSum(inputSum,inputArr)
console.log(output)