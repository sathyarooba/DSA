// import Stack from "./stack-implementation";


const reverseString = (str) => {
  const stack = []
  const strSplit = str.split(" ")
  for ( i of strSplit) {
    stack.push(i)
  }
  let finalStr = ''
  while (stack.length) {
    const popedElement = stack.pop()
    if (popedElement) {
      finalStr += popedElement + ' '
    }
  }
  return finalStr.trim()
}

console.log(reverseString("The sky is blue"))
console.log(reverseString("a good    example"))