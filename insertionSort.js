// 초기 조건 : 인덱스 0번째 값은 정렬 완료

function insertionSort(arr) {
  let result = [...arr];

  for (let i = 0; i < result.length; i++) {
    let temp = result[i];
    let aux = i - 1; // -1, 0, 1

    while (aux >= 0 && result[aux] > temp) {
      result[aux + 1] = result[aux];
      aux--;
    }

    result[aux + 1] = temp;
  }
  return result;
}

let arr = [1, 5, 3, 6, 2, 8, 7, 4, 9];
console.log(insertionSort(arr));
