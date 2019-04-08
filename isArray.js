/**
 * 判断是否是数组
 *@method: isArray
 *@param: { obj } obj 数组
 *@return: obj
 */

var isArray = function(obj) {
	return (/Array/).test(Object.prototype.toString.call(obj))
}