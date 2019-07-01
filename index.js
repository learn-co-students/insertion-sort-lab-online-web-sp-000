let unsortedArray = [5, 6, -1, 1, 3];

function findMinAndRemove(array)
{
  let minValue = array[0]; // stores first array element
  let minIndex = 0 // stores first array index

  for(let counter = 0; counter < array.length; counter++) //for the length of the array, iterate thru each element using the counter to access each element, until the counter's value increments and matches the length of the array).
  {
    if (array[counter] < minValue) // if the value of the current element is smaller than the current minimum value...
    {
      minValue = array[counter]; // ...assign that current element value to the variable holding the current minimum value and...
      minIndex = counter; //...also assign the index of the minimum value so it can be used to locate and remove that value from the array later on
    }
  }
  array.splice(minIndex, 1); // Starting at specified index, remove one element. Use the following reference to better understand the splice method : https://www.hostingadvice.com/how-to/javascript-remove-element-array/
  return minValue; // return minimum value found.
}

function insertionSort(unsortedArray)
{
	let sorted = []; // declaring empty array in order to fill it up with sorted numbers later on
	while(unsortedArray.length != 0) //...while the unsorted array is not empty...repeat the following until the array is empty...
    {
      sorted.push(findMinAndRemove(unsortedArray)); // call the method that finds and removes the smallest value from the unsorted array, and append that value to the sorted array...(again, continue until the unsorted array is empty).
    }
    return sorted; //return the newly created sorted array.
}


// console.log(findMinAndRemove(unsortedArray));
// console.log(unsortedArray)
// console.log(findMinAndRemove(unsortedArray));
// console.log(unsortedArray)
// console.log(findMinAndRemove(unsortedArray));
// console.log(unsortedArray)
// console.log(findMinAndRemove(unsortedArray));
// console.log(unsortedArray)
// console.log(findMinAndRemove(unsortedArray));
// console.log(unsortedArray)


console.log(insertionSort(unsortedArray));
