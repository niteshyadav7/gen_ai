const rotateArrayBruteForce = function (A = [], B) {
  let n = A.length;
  if (n === 0) return A;

  B = B % n; // handle cases where B > n

  for (let i = 0; i < B; i++) {
    // take the last element
    let last = A[n - 1];

    // shift all elements to the right by one
    for (let j = n - 1; j > 0; j--) {
      A[j] = A[j - 1];
    }

    // place last element at the start
    A[0] = last;
  }

  return A;
};

// Example:
console.log(rotateArrayBruteForce([1, 2, 3, 4, 5], 2));
// Output: [4, 5, 1, 2, 3]

// Rotate array using Extra Array (Right Rotation)
const rotateArrayExtra = function (A = [], B) {
  let n = A.length;
  if (n === 0) return A;

  B = B % n; // handle cases where B > n

  // Step 1: Copy last B elements into temp
  let temp = A.slice(n - B);

  // Step 2: Copy first n-B elements after that
  temp = temp.concat(A.slice(0, n - B));

  return temp;
};

// Example:
console.log(rotateArrayExtra([1, 2, 3, 4, 5], 2));
// Output: [4, 5, 1, 2, 3]

// Rotate array using Reversal Algorithm (Right Rotation)
const reverseArray = function (A, s, e) {
  while (s < e) {
    let temp = A[s];
    A[s] = A[e];
    A[e] = temp;
    s++;
    e--;
  }
};

const rotateArrayOptimal = function (A = [], B) {
  let n = A.length;
  if (n === 0) return A;

  B = B % n; // handle cases where B > n

  // Step 1: Reverse whole array
  reverseArray(A, 0, n - 1);

  // Step 2: Reverse first B elements
  reverseArray(A, 0, B - 1);

  // Step 3: Reverse remaining n-B elements
  reverseArray(A, B, n - 1);

  return A;
};

// Example:
console.log(rotateArrayOptimal([1, 2, 3, 4, 5], 2));
// Output: [4, 5, 1, 2, 3]
