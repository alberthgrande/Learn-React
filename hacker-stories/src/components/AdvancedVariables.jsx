import * as React from "react";

const numbers = [65, 44, 12, 4];
const multiplyNumbers = numbers.map(multiply);
const sortedNumbers = [...numbers].sort((a, b) => a - b);
const sortedMultiplied = multiplyNumbers.sort((a, b) => a - b);

function multiply(multiplyNumbers) {
  return multiplyNumbers * 10;
}

function AdvancedVariables() {
  return (
    <>
      <p>Sorted numbers : {sortedNumbers.join(", ")}</p>
      <p>Multiplied numbers : {sortedMultiplied.join(", ")}</p>
    </>
  );
}

export default AdvancedVariables;
