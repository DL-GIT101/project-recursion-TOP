const mergeSort = (arr) => {
    if( arr.length === 1 ){
        return arr;
    } else if( arr.length === 2 ){
        if( arr[0] > arr[1] ){
            return [arr[1],arr[0]];
        } else {
            return arr;
        }
    } else {
        const mid = Math.ceil(arr.length/2);
        let leftArr = [];
        let rightArr = [];
        for ( let i = 0; i < arr.length; i++ ) {
            if ( i < mid ) {
                leftArr.push( arr[i] );
            } else {
                rightArr.push( arr[i] );
            }
        }

        leftArr = mergeSort( leftArr );
        rightArr = mergeSort( rightArr );

        let sortedArr = [];
        let i = 0;
        let j = 0;

        while ( i < leftArr.length && j < rightArr.length ) {
            if(leftArr[i] < rightArr[j]){
                sortedArr.push(leftArr[i]);
                i++;
            }else {
                sortedArr.push(rightArr[j]);
                j++;
            }
        }

        while ( i < leftArr.length ) {
            sortedArr.push(leftArr[i]);
            i++;
        }

        while ( j < rightArr.length ) {
            sortedArr.push(rightArr[j]);
            j++;
        }

        return sortedArr;
    }
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
