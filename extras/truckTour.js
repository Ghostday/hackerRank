"use strict";
function truckTour(pumps) {
    var numOfStops = pumps.length; // First element in the array is the total Num of pumps
    for (var i = 1; i <= numOfStops; i++) {
        var litres = pumps[i][0]; // Destructing our litres from this pump
        var distanceToNext = pumps[i][1]; // Destructing our distance to the next pump
        if ((litres - distanceToNext) > 0) {
            var pumpNum = i;
            console.log("we'll make it on pump num: ", pumpNum);
            return pumpNum;
        }
    }
}
module.exports = truckTour;
