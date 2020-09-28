function average(...numbers) {
  let sum = 0;
  const count = numbers.length;
  for (const number of numbers) {
    sum += number;
  }
  return count == 0 ? 0 : sum / count;
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());
