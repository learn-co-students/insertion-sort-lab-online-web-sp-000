function findMinAndRemove(array){
  // let min = Math.min(...array)
  // console.log(min)
  let min = array[0];
  let index = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i]
      index = i
    }
  }
  // console.log(min, index)
  array.splice(index, 1)
  return min

}

function selectionSort(array){
  let sorted = []
  // console.log(array.length)
  while (array.length > 0) {
    // console.log(findMinAndRemove(array))
    sorted.push(findMinAndRemove(array))
    // console.log(sorted)
  }
  return sorted
}
