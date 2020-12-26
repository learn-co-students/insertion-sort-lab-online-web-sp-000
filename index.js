function findMinAndRemove(array){
  let sorted = array.sort()
  return sorted.shift()
}

function selectionSort(array){
  let newMin;
  let newArr = [];
  while(array.length > 0) {
    newMin = findMinAndRemove(array)
    newArr.push(newMin)
  }
  return newArr
}
