function findMinAndRemove(array){
    let min = array[0]
    let minIndex = 0
    for(let item of array) {
        if(item < min){
            min = item
            minIndex = array.indexOf(item)
        }
    }
    array.splice(minIndex, 1)
    return min
}

function selectionSort(array){
    let sortedArray = []
    let minValue
    while (array.length != 0) {
        minValue = findMinAndRemove(array)
        sortedArray.push(minValue)
    }
    return sortedArray
}
