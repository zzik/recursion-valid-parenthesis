// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

var isValid = function (s) {
  const recurse = () => {
    if (s.includes("()")) {
      s = s.replace("()", "")
      recurse()
    }
    if (s.includes("[]")) {
      s = s.replace("[]", "")
      recurse()
    }
    if (s.includes("{}")) {
      s = s.replace("{}", "")
      recurse()
    }

    return s.length > 0 ? false : true
  }
  return recurse()
}

const screen = isValid("()[]{}")

console.log({ result: screen })
