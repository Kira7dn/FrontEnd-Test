// JUNIOR JAVASCRIPT DEV Test for SALEWORK
// Leetcode Profile: https://leetcode.com/Kira7dn/
// Test result:
//    Easy: 3/3
//    Medium: 2/3
//    Hard: 2/3
//    Total: 7/9
//    Total Time: 6 hours
// ----------------------------------------------

// Easy 01. Reverse Integer
// Time complexity: O(n)
var reverse = function (x) {
  const reversed = (Math.abs(x) + "").split("").reverse().join("");
  if (reversed <= 2 ** 31 - 1 && reversed >= -(2 ** 31))
    return reversed * Math.sign(x);
  return 0;
};
// ----------------------------------------------
// Easy 02. Roman to Integer
// Time complexity: O(n)
var romanToInt = function (s) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (roman[s[i] + s[i + 1]]) {
      result += roman[s[i] + s[i + 1]];
      i++;
    } else {
      result += roman[s[i]];
    }
  }
  return result;
};
// ----------------------------------------------
// Easy 03. Employees Earning More Than Their Managers
// SELECT staff.name as Employee FROM employee staff
// INNER JOIN employee manager ON manager.id = staff.managerID
// WHERE staff.salary>manager.salary
// ----------------------------------------------
// Medium 01. Merge Two Sorted Lists
// Time complexity: O(n)
ListNode = function (val) {
  this.val = val;
  this.next = null;
};
printList = (list) => {
  let cur = list;
  while (cur) {
    console.log(cur.val);
    cur = cur.next;
  }
};
createList = (arr) => {
  let head = new ListNode(arr[0]);
  let cur = head;
  for (let i = 1; i < arr.length; i++) {
    cur.next = new ListNode(arr[i]);
    cur = cur.next;
  }
  return head;
};
var mergeTwoLists = function (list1, list2) {
  if (!list1 || !list2) return list1 || list2;
  let head = new ListNode();
  let cur = head;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      cur.next = list1;
      list1 = list1.next;
    } else {
      cur.next = list2;
      list2 = list2.next;
    }
    cur = cur.next;
  }
  cur.next = list1 || list2;
  return head.next;
};

// ----------------------------------------------
// Medium 03. Reverse Words in a String
// Time complexity: O(n)
var reverseWords = function (s) {
  const arr = s.split(" ").reverse();
  const filteredArr = arr.filter((word) => word !== "");
  return filteredArr.join(" ");
};
// ----------------------------------------------
// Hard 01. Longest Palindromic Substring
// Time complexity: O(n^2)
var longestPalindrome = function (s) {
  expand = (s, left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.slice(left + 1, right);
  };
  let max = "";
  for (let i = 0; i < s.length; i++) {
    let odd = expand(s, i, i);
    let even = expand(s, i, i + 1);
    if (odd.length > max.length) max = odd;
    if (even.length > max.length) max = even;
  }
  return max;
};
// ----------------------------------------------
// Hard 02. Edit Distance
// Time complexity: O(m*n)
var minDistance = function (word1, word2) {
  let length1 = word1.length;
  let length2 = word2.length;
  let dp = new Array(length1 + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(length2 + 1);
  }
  for (let i = 0; i < dp[0].length; i++) {
    dp[0][i] = i;
  }
  for (let i = 0; i < dp.length; i++) {
    dp[i][0] = i;
  }
  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      }
    }
  }
  return dp[length1][length2];
};
