const sort012 =(arr)=>{
   let map = new Map()
    for(let i =0 ;i<arr.length;i++){
           if(map.has(arr[i])){
               map.set(arr[i],map.get(arr[i])+1)
           }else{
               map.set(arr[i],1)
           }
   }
     let index = 0;

    for (let i = 0; i < (map.get(0) || 0); i++) {
        arr[index++] = 0;
    }

    for (let i = 0; i < (map.get(1) || 0); i++) {
        arr[index++] = 1;
    }

    for (let i = 0; i < (map.get(2) || 0); i++) {
        arr[index++] = 2;
    }
    return arr
}

const arr=[2,1,0,0,1,2,1,0]
const output = sort012(arr)
console.log(output)
