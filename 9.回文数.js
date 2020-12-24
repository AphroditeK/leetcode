/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 * 1. x => reverse(x) === x
 *    - 不使用字符串比对的方法解决问题
 *    - 借助整数反转
 * 2. string 的方法
 */
var reverse = function(x) {
  let _x = x
  let n = 0
  const MAX = Math.pow(2, 31) - 1
  const MIN = 0 - Math.pow(2, 31)
  while(_x) {
    n = n * 10 + _x % 10
    // 由于js没有类型限制，而且随着计算会自动类型转换，所以要手动处理小数部分
    _x = _x > 0 ? Math.floor(_x / 10) : Math.ceil(_x / 10)
  }
  return n > MAX || n < MIN ? 0 : n
};
var isPalindrome = function(x) {
  return x >= 0 && reverse(x) === x
};
// @lc code=end

