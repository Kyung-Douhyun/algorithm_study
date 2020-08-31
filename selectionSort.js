function selectionSort(arr) {
  let result = [...arr];

  for (let i = 0; i < result.length - 1; i++) {
    let min = i;

    for (let j = i + 1; j < result.length; j++) {
      if (result[min] > result[j]) {
        min = j;
      }
    }

    if (min !== i) {
      let temp = result[min];
      result[min] = result[i];
      result[i] = temp;
    }
  }
  return result;
}

let arr = [9, 4, 6, 8, 2, 7, 1];
console.log(selectionSort(arr));
