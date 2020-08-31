function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let left = [];
  let right = [];
  let pivot = arr[0];
  let length = arr.length;
  for (let i = 1; i < length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

let arr = [9, 4, 6, 8, 2, 7, 1];
console.log(quickSort(arr));
