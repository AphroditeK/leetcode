/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 * 
 * 需求是整数反转，本质是获取最末尾的数放到最前面
 * 1. 如何依次获取最末尾的数 
 *    - x % 10 获取最末尾的数
 *    - x /= 10 依次获取
 * 2. 如何把获取的数放到最前面
 *    - 获取的数*10相加，每次*10都会把后面的数字往前推一位
 *    - 实现数字不断添加，同时不断往前进位的效果
 * 537 -> 735
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
// @lc code=end
