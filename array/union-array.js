const unionArr = (arr1,arr2)=>{
    const union = new Set([...arr1,...arr2])
    return [...union]
}

const arr1= [2,4,6,9]
const arr2= [1,4,7,9]
const op = unionArr(arr1,arr2)

console.log(op)