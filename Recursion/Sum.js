function sum1(n) {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    // console.log(i,"sum1 inside")
    result = i + result;
  }
  return result;
}

// recursion way -
function sum(n) {
  if (n === 1) return 1;
  return sum(n - 1) + n; 
}

console.log(sum(5));
// console.log(sum1(5), "sum1");
