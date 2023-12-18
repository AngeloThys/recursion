//Fibonacci
// n: amount of fibonacci sequence numbers
// return: an array with n amount of fibonacci sequence numbers

function fibs(n) {
  const arr = [];

  for (let i = 0; i < n; i++) {
    if (i === 0 || i === 1) {
      arr.push(i);
    } else {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
  }

  return arr;
}
console.log(fibs(8));

function fibsRec(n) {
  // base cases
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  const arr = fibsRec(n - 1);
  return [...arr, arr[n - 2] + arr[n - 3]];
}
console.log(fibsRec(8));
