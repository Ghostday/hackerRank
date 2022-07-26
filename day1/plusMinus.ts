const unfilteredArr = [1, 1, 2, 0, -2, 5, 100, 2, -5, -5, -2, 0, 0, 5, -10]
function plusMinus(arr: number[]) {
  const numOfEle = arr.length;
  let [positives, negatives, neutrals] = [0, 0, 0];

  for (let i = 0; i < numOfEle; i++) {
    switch (Math.sign(arr[i])) {
      case 1:
        positives++
        break;
      case 0:
        neutrals++
        break;
      case -1:
        negatives++
        break;
    }
  }

  const getRatio = (num: number) => (num / numOfEle).toFixed(6)
  return (`${getRatio(positives)}, ${getRatio(negatives)}, ${getRatio(neutrals)}`)

}

console.log(plusMinus(unfilteredArr))

module.exports = plusMinus