function countConsonants(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i].toLowerCase()) && str[i].match(/[a-zA-Z]/)) {
      count++;
    }
  }

  return count;
}