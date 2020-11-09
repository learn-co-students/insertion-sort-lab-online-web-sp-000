function findMinAndRemove(array) {
// first set 2 variables == the first element in the array and the index of that element
    let min = array[0];
    let minIndex = 0;
// then run a for loop to run through each element of the array and compare that element to the first element 
// in that array
    for (let i = 0; i < array.length; i++) {
      let currentElement = array[i];
      if (array[i] < min) {
// if that element is less than the first element in the array it is set as the first element in the array
// this is then looped so that the smallest element of the array is set to array [0]
        min = array[i];
        minIndex = i;
      }
    }
// the first element in the array is then removed 
    array.splice(minIndex, 1);
// the element is then returned so that it can be passed to the selectionSort() function
    return min;
  }


function selectionSort(array){
    let newMin;
// let an undefined variable
   let sorted = []
   while (array.length != 0) {
       newMin = findMinAndRemove(array);
       sorted.push(newMin)
   }
   return sorted
}
