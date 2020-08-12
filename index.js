function findMinAndRemove(array){
  const reducer = (a, b) => a < b ? a : b;
  return array.splice(array.indexOf(array.reduce(reducer)), 1)[0];
}

function selectionSort(array){
  let target = [];

  for (let i = array.length - 1; i >= 0; i--){
    target.push(findMinAndRemove(array));
  }

  return target;
}
