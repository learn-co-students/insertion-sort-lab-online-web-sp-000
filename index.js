function findMinAndRemove(array){
  let min = array[0]
  let minIndex = 0

  for(let i = 1; i < array.length; i++) {
    if(array[i] < min) {
      min = array[i]
      minIndex = i
    }
  }

  array.splice(minIndex, 1)

  return min
}

function insertionSort(array){
  let sortedArr = []

  while(array.length !== 0) {
    sortedArr.push(findMinAndRemove(array))
  }

  return sortedArr
}
