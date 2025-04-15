const openBrackets = ['[', '{', '(']
const closeBrackets = [']', '}', ')']
const isEmpty  = (stack) => {
  return stack.length === 0
}

const isValidParanthesis = (str) => {
  let stack = []
  for (let i=0; i<str.length; i++) {
    if(openBrackets.includes(str[i])) {
      stack.push(str[i])
    } else if(closeBrackets.includes(str[i])) {
      if(isEmpty(stack)) {
        return 'Invalid'
      } else {
        const topElement = stack.pop()
        if(str[i] === ']' && topElement !== '[' ||
          str[i] === '}' && topElement !== '{' ||
          str[i] === ')' && topElement !== '('
        ) {
          return 'Invalid'
        }
      }
    }
  }
  return isEmpty(stack)
}

console.log(isValidParanthesis('(){}[]'))
console.log(isValidParanthesis('({}[]'))
console.log(isValidParanthesis('({}[])'))