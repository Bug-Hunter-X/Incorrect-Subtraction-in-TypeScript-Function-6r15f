function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b; // Corrected subtraction
}

let result1 = add(5, 3); // Correct
let result2 = subtract(10, 4); // Correct

console.log(result1); // Output: 8
console.log(result2); // Output: 6