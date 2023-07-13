function printSubsets(set) {
  const subsets = [];

  generateSubsets(set, "", 0, subsets);

  return subsets;
}

function generateSubsets(set, currentSubset, index, subsets) {
  if (index === set.length) {
    subsets.push(currentSubset);
    return;
  }

  generateSubsets(set, currentSubset + set[index], index + 1, subsets);

  generateSubsets(set, currentSubset, index + 1, subsets);
}