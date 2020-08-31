class Stack {
  constructor() {
    this._arr = []; // Stack 저장소
  }
  push(item) {
    this._arr.push(item); // 저장소에 item 추가
  }
  pop() {
    return this._arr.pop(); // 가장 마지막에 넣은 데이터 삭제
  }
  peek() {
    return this._arr[this._arr.length - 1];
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop(); // 3
console.log(stack);
console.log(stack.peek());
