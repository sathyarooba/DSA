const debounce = (func, time) => {
  let dataTimer
  return function (...args) {
    clearTimeout(dataTimer)
    dataTimer = setTimeout(() => {
      func.apply(this, args)
    }, time)
  }
}