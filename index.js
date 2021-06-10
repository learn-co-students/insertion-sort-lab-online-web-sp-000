function findMinAndRemove(array, min = Infinity, idx = 0){
    let minIdx = idx;
    for (let i = idx; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            minIdx = i;
        }
    }   
    array[minIdx] = array[idx];
    return min;
}

function selectionSort(array){
    for (let i = 0; i < array.length; i++) {
        const min = findMinAndRemove(array, array[i], i);
        array[i] = min;
    }
    return array;
}
