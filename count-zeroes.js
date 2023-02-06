function countZeroes(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  if (arr[leftIdx] == 0) return arr.length;
  if (arr[rightIdx] == 1) return 0;
  let findingFirstZero = true;
  while (findingFirstZero) {
    let midIdx = Math.floor((leftIdx + rightIdx) / 2);
    if (arr[midIdx] == 0) {
      if (arr[midIdx - 1] == 1) return arr.length - midIdx;
      else {
        rightIdx = midIdx - 2;
      }
    } else {
      if (arr[midIdx + 1] == 0) return arr.length - midIdx - 1;
      else {
        leftIdx = midIdx + 2;
      }
    }
  }
}

module.exports = countZeroes;
