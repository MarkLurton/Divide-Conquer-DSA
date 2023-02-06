function findFloor(arr, val) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  if (arr[0] > val) return -1;
  if (arr[rightIdx] < val) return arr[rightIdx];

  while (leftIdx < rightIdx) {
    let midIdx = Math.floor((leftIdx + rightIdx) / 2);
    if (arr[midIdx] < val) {
      leftIdx = midIdx;
      if (arr[midIdx + 1] > val) {
        return arr[midIdx];
      }
    } else if (arr[midIdx] > val) {
      rightIdx = midIdx - 1;
    } else {
      return arr[midIdx];
    }
  }
  return arr[leftIdx];
}

module.exports = findFloor;
