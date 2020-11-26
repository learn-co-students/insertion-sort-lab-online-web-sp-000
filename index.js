function findMinAndRemove(array){
  var min = array[0]
  var minIndex = 0
  for (var i = 1; i < array.length; i++)
  {
    if (min > array[i])
    {
      min = array[i]
      minIndex = i
    }
  }
  array.splice(minIndex, 1)
  return min
}

function selectionSort(array){
  
  let sorted = []
  let newMin
  
  while (array.length != 0)
  {
    sorted.push(findMinAndRemove(array))
  }
  
  return sorted
}
