function sortedFrequency(arr, val) {
  let firstInstanceIdx = findFirstInstance(arr, val);
  if (firstInstanceIdx == -1) return -1;
  else {
    let lastInstanceIdx = findLastInstance(arr, val);
    return lastInstanceIdx - firstInstanceIdx + 1;
  }

  function findFirstInstance(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    if (arr[0] == val) return 0;
    else {
      while (leftIdx < rightIdx) {
        let midIdx = Math.floor((leftIdx + rightIdx) / 2);
        if (arr[midIdx] < val) {
          if (arr[midIdx + 1] == val) return midIdx + 1;
          leftIdx = midIdx + 1;
        } else if (arr[midIdx] > val) {
          rightIdx = midIdx - 1;
        } else {
          if (arr[midIdx - 1] < val) return midIdx;
          rightIdx = midIdx - 1;
        }
      }
      return -1;
    }
  }

  function findLastInstance(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    if (arr[rightIdx] == val) return rightIdx;
    else {
      while (leftIdx < rightIdx) {
        let midIdx = Math.floor((leftIdx + rightIdx) / 2);
        if (arr[midIdx] < val) {
          leftIdx = midIdx + 1;
        } else if (arr[midIdx] > val) {
          if (arr[midIdx - 1] == val) return midIdx - 1;
          rightIdx = midIdx - 1;
        } else {
          if (arr[midIdx + 1] > val) return midIdx;
          leftIdx = midIdx + 1;
        }
      }
      return -1;
    }
  }
}

module.exports = sortedFrequency;
