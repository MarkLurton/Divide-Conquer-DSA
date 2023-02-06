function findRotationCount(arr) {
  let idxOfGreatest = findGreatestVal(arr);
  if (idxOfGreatest == arr.length - 1) return 0;
  else return idxOfGreatest + 1;

  function findGreatestVal(arr) {
    leftIdx = 0;
    rightIdx = arr.length - 1;
    if (arr[rightIdx] >= arr[leftIdx]) return rightIdx;
    while (leftIdx <= rightIdx) {
      let midIdx = Math.floor((leftIdx + rightIdx) / 2);
      if (arr[midIdx] > arr[midIdx + 1]) return midIdx;
      else if (arr[midIdx] < arr[leftIdx]) {
        rightIdx = midIdx - 1;
      } else {
        leftIdx = midIdx + 1;
      }
    }
  }
}

module.exports = findRotationCount;
