const frequencyFinder =(arr)=>{
    let map = new Map();
    for(let i = 0 ; i<arr.length ;i++){
        if(map.has(arr[i])){
            let getFreq = map.get(arr[i])
            map.set(arr[i],getFreq+1)
        }else{
            map.set(arr[i],1)
        }
    }
    return map
}

let freqArr = [2,3,2,5,3,5,2,1];
let output = frequencyFinder(freqArr);
console.log(output)
