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

const test = "()[]{}"
const test2 = "(){}}{"
const test3 = ")]}"
const test4 = "(]"
const test5 = "[((()))]"
const test6 = "{[]}"
const test7 = "()"
const test8 = "([)]"
const test9 = "([])"
const screen = isValid(test9)

console.log({ result: screen })
