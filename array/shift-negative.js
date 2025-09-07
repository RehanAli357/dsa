const shiftAllNegative =(arr)=>{
    let negative =0 , positive = arr.length-1
    while(negative<positive ){
        if(arr[negative]<0 && arr[positive]>=0){
            negative=negative+1;
            positive=positive-1;
        }
        else{
            if(arr[negative]>0 && arr[positive]<=0){
                [arr[negative],arr[positive]]=[arr[positive],arr[negative]]
            }else if(arr[positive]<=0){
                negative=negative+1;
                 [arr[negative],arr[positive]]=[arr[positive],arr[negative]]
                positive=positive+1
            }
        }
    }
    return arr
}

const arr= [ -2, 1, -3, 4, 0, -2, 5 ]

const op = shiftAllNegative(arr)
console.log(op)
