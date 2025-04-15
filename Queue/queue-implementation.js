class Queue {
  constructor () {
    this.queue = []
  }
  enqueue (element) {
    this.queue.push(element)
  }
  dequeue () {
    if (this.isEmpty()) {
      return 'Queue is Already Empty'
    } else {
      this.queue.shift()
    }
  }
  front () {
    if (this.isEmpty()) {
      return 'Queue is Already Empty'
    } else {
      return this.queue[0]
    }
  }
  isEmpty () {
    return this.size() === 0
  }
  size () {
    return this.queue.length
  }
  printQueue () {
    let finalQue = ''
    for (let index = 0; index < this.size(); index++) {
      finalQue += this.queue[index] + ','
    }
    return finalQue
  }
}

let que = new Queue()

que.enqueue(5)
que.enqueue(10)
que.enqueue(15)
que.dequeue()
console.log(que.front())
console.log(que.size())
console.log(que.isEmpty())

console.log(que.printQueue())