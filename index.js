function findMinAndRemove(array){

let min = array[0]
let index =  0

for (let i = 0; i < array.length; i++) {
  if (array[i] < min) {
    array[i] = min
    index = i
  }
}

array.splice(index, 1)
return min

}

function selectionSort(array){
 let newMin;
 let sorted = []
  while(array.length != 0){
   newMin = findMinAndRemove(array)
   sorted.push(newMin)
  }
return sorted
}