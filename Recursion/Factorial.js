// Identify Base Case
//  figure out the simplest possible input for which you can directly return a result without further recursion.
//

function factorial(n) {
  // Base case: if n is 0, return 1
  if (n === 1) return 1;
  // return n * factorial(n - 1);
  for (let i = 1; i < n; i++) {
    n = n + i
  }
}

console.log(factorial(5));
