let sortedArray = [];
let unsortedArray = [5, 6, -1, 1, 3];
//find the smallest member and remove it 
//set a variable, the min, and set it to the first index, it will ultimately be replaced with the true min
//compare the min(first index) to the next position, if it is less than then store it and feed it back
function findMinAndRemove(array) {
  let min = array[0];
  let minIndex = 0;
  for (let i = 0; i < array.length; i++) {
    let currentElement = array[i];
    if (array[i] < min) {
      min = array[i];
      minIndex = i;
    }
  }
  array.splice(minIndex, 1);
  return min;
}

function selectionSort(array){
let newMin;
let sorted = [];
while (array.length !== 0){
  newMin = findMinAndRemove(array);
  sorted.push(newMin);
}
return sorted;
}
