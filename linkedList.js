// Node 생성 클래스 -> new Node = {element: element, next: null}
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

// LinkedList 생성 클래스
class LinkedList {
  constructor() {
    this.head = new Node("head");
  }

  find(item) {
    let currNode = this.head;
    while (currNode.element != item) {
      currNode = currNode.next;
    }
    return currNode;
  }
  insert(newElement, item) {
    let newNode = new Node(newElement);
    let current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
  }
  display() {
    let currNode = this.head;
    while (!(currNode.next == null)) {
      console.log(currNode.next.element);
      currNode = currNode.next;
    }
  }
  findPrevious(item) {
    let currNode = this.head;
    //다음 노드가 존재하면서 다음노드의 아이템이
    while (!(currNode.next == null) && currNode.next.element != item) {
      currNode = currNode.next;
    }
    return currNode;
  }
  remove(item) {
    let prevNode = this.findPrevious(item);
    if (!(prevNode.next == null)) {
      prevNode.next = prevNode.next.next;
    }
  }
}

let ll = new LinkedList();
console.log(ll);
ll.insert(12, "head");
console.log(ll);
