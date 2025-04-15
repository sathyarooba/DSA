class Stack {
  constructor () {
    this.stack = []
  }
  push (element) {
    this.stack.push(element)
  }
  pop () {
    if (this.isEmpty()) {
      console.log('Stack Already Empty')
    } else {
      this.stack.pop()
    }
  }
  peek () {
    if (this.isEmpty()) {
      console.log('Stack Already Empty')
    } else {
      console.log(this.stack[this.size() - 1])
    }
  }
  isEmpty () {
    return this.size() === 0
  }
  size () {
    return this.stack.length
  }
}

export default Stack

const stack = new Stack()

stack.push('sathya')
stack.push('rooba')
stack.push('James')
stack.push('John')

stack.pop()
stack.peek()
console.log(stack.isEmpty())
console.log(stack.size())
console.log(stack)

stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.peek()