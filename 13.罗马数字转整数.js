/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 * 核心是找规律，而且要找到最核心本质的最抽象的规律
 * 算法的关键是确定如何遍历
 * 这里不做错误排除，认为函数的输入都是符合罗马数字规则的
 * 1. 基本数字
 *    - I = 1
 *    - V = 5
 *    - X = 10
 *    - L = 50
 *    - C = 100
 *    - D = 500
 *    - M = 1000
 * 2. 相同并列即相加，该情况不会出现并列至进位的情况，相同并列最多3个
 *    - XX = 20
 *    - 错误情况 => VV = 10 , XXXXX = 50 , XXXX = 40
 *    - XL = 40
 * 3. 左减数字仅限 I X C , 表示 5 ( V L D )的都不能用于左减
 */
// * 使用 switch 比使用其他的数据类型都要快，因为 switch 是纯逻辑结构
// * 纯逻辑结构的 switch 是 O(1)，其他任何数据类型都还会额外牵涉到存取的额外花费
var get = function(x) {
  switch (x) {
    case 'I': return 1;
    case 'V': return 5;
    case 'X': return 10;
    case 'L': return 50;
    case 'C': return 100;
    case 'D': return 500;
    case 'M': return 1000;
    default: return 0;
  }
}
var romanToInt = function(s) {
  // MCMXCIV
  let len = s.length
  let sum = 0
  let pre = get(s.charAt(0))
  for (let i = 1; i < len; i++) {
    let num = get(s.charAt(i))
    if (pre < num) {
      sum -= pre
    } else {
      sum += pre
    }
    pre = num
  }
  sum += pre
  return sum
};
// @lc code=end

