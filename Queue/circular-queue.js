let CircularQueue = function (queueSize) {
  this.queue = []
  this.size = queueSize
}

CircularQueue.prototype.enqueue = function (element) {
  if(this.isFull()) return false
  this.queue.push(element)
}

CircularQueue.prototype.dequeue = function () {
  if(this.isEmpty()) return false
  this.queue.shift()
}

CircularQueue.prototype.front = function () {
  if(this.isEmpty()) return -1
  return this.queue[0]
}

CircularQueue.prototype.rear = function () {
  if(this.isEmpty()) return -1
  return this.queue[this.queue.length - 1]
}

CircularQueue.prototype.isFull = function () {
  if(this.queue.length === this.size) return true
  return false
}

CircularQueue.prototype.isEmpty = function () {
  return this.queue.length === 0
}

let myQueue = new CircularQueue(5)
myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)
myQueue.dequeue()
console.log(myQueue.isFull())
console.log(myQueue.isEmpty())
myQueue.dequeue()
myQueue.dequeue()
console.log(myQueue.isEmpty())
myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)
myQueue.enqueue(4)
myQueue.enqueue(5)
console.log(myQueue.isFull())

console.log('front', myQueue.front(), 'rear', myQueue.rear())