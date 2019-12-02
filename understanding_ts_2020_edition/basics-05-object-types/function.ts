function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number) {
  console.log(num);
  return 1;
}

printResult(add(1, 3));

let combinedValues: (a: number, b: number) => number;

combinedValues = add;

function addHandler(num1: number, num2: number, cb: (a: number) => void) {
  const result = num1 + num2;

  cb(result);
}

addHandler(1, 3, printResult);

console.log(combinedValues(9, 1));
