const rotateArr = (arr)=>{
    for(let i =0 ;i<arr.length;i++){
        [arr[i],arr[arr.length-1]]=[arr[arr.length-1],arr[i]]
    }   
    return arr
}

const arr =[2,5,1,4,3]
const op = rotateArr(arr)
console.log(op)