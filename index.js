function findMinAndRemove(array){
  let min = array[0];
  let minIndex = 0;
  array.filter((int, index) => {
    if (int < min) {
      min = int;
      minIndex = index;
    }
  })
  array.splice(minIndex, 1)
  return min;
}

function insertionSort(array) {
  let newArray =[];
  while(array.length >= 1) {
    newArray.push(findMinAndRemove(array))
  }
  return newArray;
}
