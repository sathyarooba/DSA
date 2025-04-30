const palindrome = (str) => {
  if(str <0)
    return false
  return str === +(str.toString().split('').reverse().join(''))
}

console.log(palindrome(12221))
console.log(palindrome(-12221))