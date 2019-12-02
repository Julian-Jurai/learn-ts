type Combinable = number | string;
type ConversionDescriptors = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptors
) {
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    return +input1 + +input2;
  } else {
    return input1.toString() + input2.toString();
  }
}

const combinedNumbers = combine(1, 3, "as-number");
const combinedString = combine("mary", "Ann", "as-text");

console.table({ combinedNumbers, combinedString });
