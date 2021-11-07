//Task 1
function getFactorial(n) {
  if (n === 0 || n === 1) return 1;
  else {
    return n * getFactorial(n - 1);
  }
}
console.log(getFactorial(3));

//Task 2
function pow(num, degree) {
  if (degree === 1) return num;
  else {
    return (num *= pow(num, degree - 1));
  }
}
console.log(pow(2, 3));

//Task 3
function sum(a, b) {
  return b !== 0 ? sum(++a, --b) : a;
}

console.log(sum(2, 4));
console.log(sum(0, 4));
console.log(sum(2, 0));
