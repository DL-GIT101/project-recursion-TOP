const fibs = (n) => {
    const fibonacci = (n) => {
        if(n <= 1){
            return n;
        } else {
            return fibonacci(n-1) + fibonacci(n-2);
        }
    }

    let arr = [];
    for (let index = 0; index < n; index++) {
            arr.push(fibonacci(index));
    }
    return arr;
}

//console.log(fibs(8));

const fibsRec = (n) => {
    if(n <= 0){
        return [];
    } else if(n === 1){
        return [0];
    } else if(n === 2){
        return [0,1];
    } else {
        let arr = fibsRec(n-1);
        arr.push(arr[arr.length-1] + arr[arr.length-2]); 
        return arr;
    }
}

console.log(fibsRec(8));