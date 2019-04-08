/**
 * 判断是否是闰年
 *@method: isLeapYear
 *@param: { obj } year 年份
 *@return: { boolean }
 */

var isLeapYear = function(year) {
	return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0
}