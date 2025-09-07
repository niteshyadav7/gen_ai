// find the second largest elements

const secondLargest = function (A = []) {
  let n = A.length - 1;
  let largestElm = A[n];
  let secondLargestElm = -Infinity;
  for (let i = n - 1; i >= 0; i--) {
    if (A[i] > largestElm) {
      secondLargestElm = largestElm;
      largestElm = A[i];
    }
    if (A[i] < largestElm && A[i] > secondLargestElm) {
      secondLargestElm = A[i];
    }
  }
  return {
    "Largest Element": largestElm,
    "Second Largest Element": secondLargestElm,
  };
};

console.log(secondLargest([10, 5, 20, 8, 15]));
console.log(secondLargest([10, 10, 10, 10]));
console.log(secondLargest([-5, -9, -1]));
