
function displayMessage() {
  console.log("ok, promisse resolvida")
}

function waitTenSecond() {
  return new Promise((resolve) => {
    let count = 0
    const interval = setInterval(function() {
      count ++
      if(count === 10) {
        clearInterval(interval)
        resolve()
      }
    }, 1000)
  })
}

waitTenSecond()
  .then(displayMessage)