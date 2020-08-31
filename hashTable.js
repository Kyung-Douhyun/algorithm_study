class HashTable {
  constructor() {
    this.storageLimit = 3;
    this.table = new Array(this.storageLimit);
  }

  // data -> index
  getHash(data) {
    let hash = 0;
    for (let i = 0; i < data.length; i++) {
      /* charCodeAt() 메서드는 주어진 인덱스에 대한 
        UTF-16 코드를 나타내는 0부터 65535 사이의 정수 */
      hash += data.charCodeAt(i);
    }
    console.log("hash", hash);
    return hash % this.storageLimit;
  }

  /* data 와 value를 넣으면, 해당 data에 대한 key를 찾아서 
    해당 key에 대응하는 해쉬주소에 value를 저장 */
  add(data, value) {
    const index = this.getHash(data);
    this.table[index] = value;
  }

  get(data) {
    const index = this.getHash(data);
    return this.table[index];
  }

  remove(data) {
    const index = this.getHash(data);
    delete this.table[index];
  }
}

let aa = new HashTable();
aa.add("john", "111222333");
aa.add("dave", "222333444");
aa.add("stella", "333444555");
aa.add("mike", "444555666");
console.log(aa);
