function calculateLength(str) {
  
  if (str === "") {
    return 0;
  }

  return 1 + calculateLength(str.slice(1));
}