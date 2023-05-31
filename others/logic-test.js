function sortStr(str) {
  return [...str].sort().join("");
}

function isAnagram(str1, str2) {
  return sortStr(str1) === sortStr(str2);
}

function groupAnagramWords(arr) {
  const resultArr = [];

  for (const word of arr) {
    let foundGroup = false;

    for (const group of resultArr) {
      const firstWordOfGroup = group[0];

      if (isAnagram(firstWordOfGroup, word)) {
        group.push(word);
        foundGroup = true;

        break;
      }
    }

    if (!foundGroup) {
      resultArr.push([word]);
    }
  }

  return resultArr;
}


const result = groupAnagramWords(['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']);

console.log(result);