class Sorted {
  constructor(data,compare) {
    this.data =data
    this.compare = compare
  }
  take() {
    if(!this.data.length) return 
    let min = this.data[0]
    let minIndex = 0
    for(let i = 1 ;i < this.data.length;i++) {
      if(this.compare(this.data[i],min) < 0) {
        min = this.data[i]
        minIndex = i
      }
    }
    this.data[minIndex] = this.data[this.data.length - 1]
    this.data.pop()
    return min
  }
  insert(v) {
    this.data.push(v)
  }
  get length() {
    return this.data.length
  }
}
// const s = new Sorted([7,6,5,4,3,1,23,4,50], (a,b) => b-a)
// s.take()
// console.log(s.take())
// console.log(s.take())
// console.log(s.take())

function distance([x,y]) {
  return (x - end[0] ** 2 + (y-end[1]) ** 2)
}