function dfs(digits, start_index, path, res) {
  let key = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"]

  }
  if (path.length === digits.length) {
    res.push(path.join(""))
    return
  }

  let nextNumber = digits[start_index]
  for (let letter of key[nextNumber]) {
    path.push(letter)
    dfs(digits, start_index + 1, path, res)
    path.pop()
  }

}

export function letterCombinationsOfPhoneNumber(digits) {
  // WRITE YOUR BRILLIANT CODE HERE
  let res = []
  dfs(digits, 0, [], res);
  return res
}
