function findMinAndRemove(array){
    let min = array[0]
    let minIdx = null
    for(let i = 0; i < array.length; i++) {
        if(array[i] < min) {
            min = array[i]
            minIdx = i
        }
    }
    return array.splice(minIdx, 1).pop()
}

function insertionSort(array){
    let sorted = [];
    while(array.length > 0) {
        sorted.push(findMinAndRemove(array))
    }
    return sorted
}
