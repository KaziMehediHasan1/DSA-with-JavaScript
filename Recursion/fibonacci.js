// loop -

const fibonacci = (n) => {
  let last = [0, 1]; // 0, 1, 1, 2, 3, 5
  for (let i = 1; i <= n; i++) {
    // console.log(i, "i man");
    const next = last[0] + last[1];
    last[0] = last[1];
    last[1] = next;
  }
  return last[1];
};

const ans = fibonacci(5);
// console.log(ans, "answer");

// recursive -

const Rfibonacci = (n) => {
    // base case -
    
};

const rAns = Rfibonacci(5);
