function printPermutations(str) {
  const permutations = [];

  generatePermutations(str, 0, str.length - 1, permutations);

  return permutations;
}

function generatePermutations(str, left, right, permutations) {
  if (left === right) {
    permutations.push(str);
    return;
  }

  for (let i = left; i <= right; i++) {
    str = swap(str, left, i);
    generatePermutations(str, left + 1, right, permutations);
    str = swap(str, left, i);
  }
}

function swap(str, i, j) {
  const arr = str.split("");
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr.join("");
}