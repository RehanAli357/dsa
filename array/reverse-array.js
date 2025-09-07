const reverseArr = (arr)=>{
    let j = arr.length-1;
    for(let i =0 ;i<arr.length/2;i++){
        [arr[i],arr[j]]=[arr[j],arr[i]]
        j=j-1;
    }
    return arr
}

const arr=[2,3,5,6,1,4]
const output = reverseArr(arr)
console.log(output)
