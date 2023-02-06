function findRotatedIndex(arr, val) {
  let idxOfGreatest = findGreatestVal(arr);

  let leftArr = arr.slice(0, idxOfGreatest + 1);
  console.log(leftArr);
  let rightArr = arr.slice(idxOfGreatest + 1);
  console.log(rightArr);

  if (val > leftArr[leftArr.length - 1]) return -1;
  if (val < rightArr[0]) return -1;

  if (val < rightArr[rightArr.length - 1]) {
    console.log("Serching rightArr");
    let result = !(searchSubArray(rightArr, val) == -1)
      ? leftArr.length + searchSubArray(rightArr, val)
      : -1;
    return result;
  } else {
    console.log("Searching leftArr");
    return searchSubArray(leftArr, val);
  }

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
  function searchSubArray(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    if (arr[0] == val) return 0;
    if (arr[rightIdx] == val) return rightIdx;
    while (leftIdx < rightIdx) {
      let midIdx = Math.floor((leftIdx + rightIdx) / 2);
      if (arr[midIdx] < val) {
        leftIdx = midIdx + 1;
      } else if (arr[midIdx] > val) {
        rightIdx = midIdx - 1;
      } else {
        return midIdx;
      }
    }
    return -1;
  }
}

module.exports = findRotatedIndex;
