/**
 * 判断是否是日期
 *@method: isDate
 *@param: { obj } obj 日期
 *@return: { boolean }
 */

var isDate = function(obj) {
	return (/Date/).test(Object.prototype.toString.call(obj)) && !isNaN(obj.getTime())
}

