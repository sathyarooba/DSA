const truncateString = (str, maxLength) => {
  if (str.length <= maxLength)
    return str
  else {
    let result = ''
    for (let i = 0; i<maxLength; i++) {
      result = result + str[i]
    }
    return `${result}...`
  }
}

console.log(truncateString('Subscribe to me', 9))