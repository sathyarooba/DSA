class Node {
  constructor (data) {
    this.data = data
    this.next = null
  }
}
class LinkedList {
  constructor () {
    this.head = null
  }

  addFirst (data) {
    const node = new Node(data)
    node.next = this.head
    this.head = node
  }

  addEnd (data) {
    const node = new Node(data)
    let current = this.head
    while (current.next) {
      current = current.next
    }
    current.next = node
  }

  size () {
    let count = 0
    let current = this.head
    while (current.next) {
      current = current.next
      count++
    }
    return count
  }

  addAtAnIndex (data, index) {
    if (index < 0 || index > this.size()) {
      return
    }
    if (index === 0) {
      this.addFirst(data)
    } else {
      const node = new Node(data)
      let iter = 1, current = this.head
      while (iter !== index) {
        current = current.next
        iter++
      }
      node.next = current.next
      current.next = node
    }
  }

  removeHead () {
    if (!this.head) {
      return
    }
    this.head = this.head.next
  }

  removeLast () {
    let current = this.head
    while (current.next.next) {
      current = current.next
    }
    current.next = null
  }

  print () {
    let current = this.head
    while (current) {
      console.log(current.data)
      current = current.next
    }
  }
}

const list = new LinkedList()
list.addFirst(1)
list.addFirst(2)
list.addFirst(3)
list.addFirst(4)
list.addFirst(5)
list.addEnd(6)
list.addAtAnIndex(7, 0)
list.addAtAnIndex(8, 2)
list.removeHead()
list.removeLast()
list.print()