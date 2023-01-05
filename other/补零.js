(() => {
  function padZero (num, n) {
    return (Array(n).join(0) + num).slice(-n)
  }

  function padZero2 (num, n) {
    return String.prototype.padStart.call(num, n, 0)
  }
  function padZero3 (num, n) {
    return ('0'.repeat(n) + num).slice(-n)
  }

  console.time('padZero')
  for (let i = 0; i < 1000000; i++) {
    padZero(i, 6)
  }
  console.timeEnd('padZero') // 174.843994140625 ms

  console.time('padZero2')
  for (let i = 0; i < 1000000; i++) {
    padZero2(i, 6)
  }
  console.timeEnd('padZero2') // 34.193115234375 ms

  console.time('padZero3')
  for (let i = 0; i < 1000000; i++) {
    padZero3(i, 6)
  }
  console.timeEnd('padZero3') // 79.47509765625 ms
})()
