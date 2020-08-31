function bubbleSort(arr) {
  let result = [...arr]; // 원본 데이터 복사

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - i; j++) {
      if (result[j] > result[j + 1]) {
        let temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }

  return result;
}

let items = [8, 4, 9, 2, 5, 10, 15, 22, 88, 63, 18];
console.log(bubbleSort(items)); // [2, 4, 5, 8, 9, 10, 15, 18, 22, 63, 88]
// Big O = O(n^2)
