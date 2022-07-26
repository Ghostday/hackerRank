function truckTour(pumps: number[][]) {
  let numOfStops = pumps.length // First element in the array is the total Num of pumps
  for (let i = 1; i <= numOfStops; i++) {
    const litres = pumps[i][0] // Destructing our litres from this pump
    const distanceToNext = pumps[i][1] // Destructing our distance to the next pump
    if ((litres - distanceToNext) > 0) {
      const pumpNum = i;
      console.log("we'll make it on pump num: ", pumpNum);
      return pumpNum
    }
  }
}

module.exports = truckTour