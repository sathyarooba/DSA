let MyQueue = function () {
  this.s1 = []
  this.s2 = []
}

MyQueue.prototype.enqueue = function (element) {
  while (this.s1.length !== 0) {
    this.s2.push(this.s1.pop())
  }
  this.s2.push(element)
  while (this.s2.length !== 0) {
    this.s1.push(this.s2.pop())
  }
}

MyQueue.prototype.dequeue = function () {
  this.s1.pop()
}

MyQueue.prototype.front = function () {
  return this.s1[this.s1.length - 1]
}

MyQueue.prototype.rear = function () {
  return this.s1[0]
}

let queue = new MyQueue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

console.log('front', queue.front(), 'rear', queue.rear())

queue.dequeue()
console.log('front', queue.front(), 'rear', queue.rear())

queue.enqueue(4)
queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)
console.log('front', queue.front(), 'rear', queue.rear())