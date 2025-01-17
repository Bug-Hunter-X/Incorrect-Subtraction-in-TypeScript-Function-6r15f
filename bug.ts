function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b; // Bug: This should be a - b
}

let result1 = add(5, 3); // Correct
let result2 = subtract(10, 4); // Bug: Incorrect result

console.log(result1); // Output: 8
console.log(result2); // Output: 6