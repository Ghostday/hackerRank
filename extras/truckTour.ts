import fs from 'fs'
fs.readFile('./truckTourtest.csv', 'utf8', (err, data) => {
  if (err) throw err;
  const lines = data.split('\n')
  const pumps = lines.map(line => line.split(' ').map(Number))
  console.log(pumps)
  console.log(truckTour(pumps))
})

function truckTour(pumps: number[][]) {
  let numOfStops = pumps.length // First element in the array is the total Num of pumps

  for (let i = 0; i <= numOfStops; i++) {

    const litres = pumps[i][0] // Destructing our litres from this pump
    const distanceToNext = pumps[i][1] // Destructing our distance to the next pump

    if ((litres - distanceToNext) > 0) {
      const pumpNum = i;
      for (let n = 0; n < numOfStops; n++) {
        const testArr = [...pumps].slice(0, i)
        testArr.unshift(...pumps.slice(i, numOfStops))

        const litres = testArr[n][0] // Destructing our litres from this pump
        const distanceToNext = testArr[n][1]
        if ((litres - distanceToNext) > 0) {

        } else {
          break;
        }

      }
      return pumpNum
    }
  }
}

// module.exports = truckTour;
