const minimumJumps = (arr) => {
    let jumps=0;
    let arrLength=arr.length;
    let sum= 0;
    let i=0; 
    if(arrLength<=1) return 0;
    if(arr[0]===0) return -1;
    
}

const arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9];
const op = minimumJumps(arr);
console.log(op);