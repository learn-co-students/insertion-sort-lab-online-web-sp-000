function findMinAndRemove(array){
    let min = array[0];
    let j = 0
    for (let i = 0; i < array.length; i++){
        if (array[i] < min) {
            min = array[i]
            j = i
        }
    }
   return array.splice(j, 1)[0]  
}

function insertionSort(array){
    let sorted = []
    while (array.length > 0) {
        sorted.push(findMinAndRemove(array))
    }
    return sorted
}
