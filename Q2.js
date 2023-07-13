function lastRemaining(n) {
  return remainingHelper(n, true);
}

function remainingHelper(n, isLeftToRight) {
  if (n === 1) {
    return 1;
  }

  if (isLeftToRight) {

    return 2 * remainingHelper(Math.floor(n / 2), false);
  } else {

    if (n % 2 === 0) {
      return 2 * remainingHelper(Math.floor(n / 2), true) - 1;
    } else {
      return 2 * remainingHelper(Math.floor(n / 2), true);
    }
  }
}