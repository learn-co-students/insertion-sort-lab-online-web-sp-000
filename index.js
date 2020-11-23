// insertion sort - finds minimum element, removes it and pushes it to new array until the original is empty
function findMinAndRemove(array){
    let min = array[0];
    let minIndex = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            minIndex = i;
        }
    }

    array.splice(minIndex, 1);
    return min;

}

function selectionSort(array){
    let sortedArray = [];

    for (let i = array.length-1; i >= 0; i--) {
        sortedArray.push(findMinAndRemove(array));
    }

    return sortedArray;
}
