// MergeSort
// arr: array with integers
// return: arr sorted
function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  } else {
    const m = Math.floor(arr.length / 2);
    const arr1 = mergeSort(arr.slice(0, m));
    const arr2 = mergeSort(arr.slice(m, arr.length));
    return merge(arr1, arr2);
  }
}

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  const arr = [];

  while (arr1.length > i && arr2.length > j) {
    if (arr1[i] < arr2[j]) {
      arr.push(arr1[i++]);
    } else {
      arr.push(arr2[j++]);
    }
  }

  for (; arr1.length > i; i++) {
    arr.push(arr1[i]);
  }

  for (; arr2.length > j; j++) {
    arr.push(arr2[j]);
  }

  return arr;
}

console.log(mergeSort([2, 1, 8, 3, 4, 3, 8]));