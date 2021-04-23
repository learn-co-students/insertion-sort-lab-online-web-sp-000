function findMinAndRemove(arr){
    let min = arr[0];
    let minPos = 0;
    for(let i = 0; arr.length > i; i++){
        if(min > arr[i]){
            min = arr[i];
            minPos = i;
        }
    }
    arr.splice(minPos, 1)
    return min
}

function selectionSort(arr){
    let newArr = [];
    let min;
    while( arr.length !== 0){
        min = findMinAndRemove(arr);
        newArr.push(min)
    }
    return newArr;
}
