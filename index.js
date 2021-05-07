function findMinAndRemove(array){
  let min = array[0]
  let minInd = 0

  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i]
      minInd = i
    }
  }
  array.splice(minInd, 1)
  return min
}

function selectionSort(array){
  let min;
  let sortedArray = [];

  while (array.length != 0) {
    min = findMinAndRemove(array);
    sortedArray.push(min);
  }

  return sortedArray;
}
