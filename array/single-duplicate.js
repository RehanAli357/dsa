const duplicateNums=(arr)=>{
    let j=1;
    let data = 0
    for(let i =0 ;i<arr.length-1;i++){
      for(let j = i+1;j<arr.length;j++){
          if(arr[i]>=arr.length || arr[j]>=arr.length){
              return 0
          }else{
              
          if(arr[i]-arr[j]===0){
              if(data===0){
                  data=arr[i]
              }else{
                  return 0
              }
          }
          }
      }
    }
    return data
  
}
const nums = [1, 4, 3, 1, 2]
const op = duplicateNums(nums)
console.log(op)
