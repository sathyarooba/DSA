let stackUsingQueue = function () {
  this.q1 = []
  this.q2 = []
}

stackUsingQueue.prototype.push = function (element) {
  this.q2.push(element)
  while (this.q1.length !== 0) {
    this.q2.push(this.q1.shift())
  }
  while(this.q2.length !== 0) {
    this.q1.push(this.q2.shift())
  }
}

stackUsingQueue.prototype.pop = function () {
  return this.q1.shift()
}

stackUsingQueue.prototype.top = function () {
  return this.q1[0]
}

stackUsingQueue.prototype.empty = function () {
  return this.q1.length === 0
}

let stack = new stackUsingQueue()
stack.push(3)
stack.push(5)
stack.push(6)
stack.push(7)

console.log(stack.top())

stack.pop()
console.log(stack.top())