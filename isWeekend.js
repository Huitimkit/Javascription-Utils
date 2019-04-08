/**
 * 判断日期是否周末
 *@method: isWeekend
 *@param: { obj } date 日期
 *@return: { boolean }
 */

var isWeekend = function(date) {
	var day = date.getDay()
	return day === 0 || day === 6
}