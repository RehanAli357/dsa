const minMax = (arr)=>{  
    let min=arr[0] ,max=arr[0]
    for(let i =1;i<arr.length;i++){
            if(arr[i]<min){
                min=arr[i]
            }
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return [min,max]
}

const arr=[2,3,5,6,1,4];
const output = minMax(arr)
console.log(output)
