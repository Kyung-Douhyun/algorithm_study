class Node {
  constructor(data) {
    this.data = data;
    this.children = []; // 자식 노드들이 담길 배열입니다.
  }

  add(data) {
    // 자식 노드를 추가하는 메서드입니다. 시간복잡도 O(1)이겠죠.
    this.children.push(new Node(data));
  }

  remove(data) {
    // 자식 노드를 삭제하는 메서드입니다.최악의 경우 시간복잡도 O(N)입니다.
    this.children = this.children.filter((child) => child.data !== data);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
}

const tree = new Tree();
tree.root = new Node("루트 노드입니다.");
tree.root.add("자식1");
tree.root.add("자식2");
tree.root.add("자식3");
tree.root.add("자식4");
console.log(tree);
