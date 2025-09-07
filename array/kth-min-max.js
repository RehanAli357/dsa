const kthMinMax = (kth,arr)=>{
    if(kth<1){
        return []
    }
    if(kth>arr.length ){
        return[]
    }else{
        arr.sort((a,b)=>a-b);
        if(arr[kth-1]>arr[arr.length-kth]){      
        return [arr[arr.length-kth],arr[kth-1]]
        }else{
            return [arr[kth-1],arr[arr.length-kth]]
        }
    }
}

const arr=[2,3,5,6,1,4];
const kth=2
const output = kthMinMax(kth,arr)
console.log(output)
