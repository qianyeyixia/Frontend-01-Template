class BinaryHeap {
  constructor(data, compare) {
    this.data = data;
    this.compare = compare;
  }
  take() {
    if (!this.data.length) return;
    let min = this.data[0];
    let minIndex = 0;
    let i = 0;
    // fix heap
    while (i < this.data.length) {
      if (i * 2 + 1 >= this.data.length) break;
      if (i * 2 + 2 >= this.data.length) {
        this.data[i] = this.data[i * 2 + 1];
   
        i = i * 2 + 1;
        break;
      }
      if (this.compare(this.data[i * 2 + 1], this.data[i * 2 + 2]) < 0) {
        this.data[i] = this.data[i * 2 + 1];
      } else {
        this.data[i] = this.data[i * 2 + 2];
      }
    }
    this.insertAt(i, this.data.pop());

    return min;
  }
  insert(v) {
    this.insertAt(this.data, v);
  }
  insertAt(i, v) {
    while (this.compare(v, this.data[Math.floor((i - 1) / 2)]) < 0) {
      this.data[i] = this.data[Math.floor((i - 1) / 2)];
      this.data[Math.floor((i - 1) / 2)] = v;
    }
  }
  get length() {
    return this.data.length;
  }
}
// const s = new Sorted([7,6,5,4,3,1,23,4,50], (a,b) => b-a)
// s.take()
// console.log(s.take())
// console.log(s.take())
// console.log(s.take())

function distance([x, y]) {
  return x - end[0] ** 2 + (y - end[1]) ** 2;
}
