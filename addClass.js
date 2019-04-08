/**
 * 添加指定css类名
 *@method: addClass
 *@param: { obj } el 操作元素
 *@param: { string } cn 需要添加的css类名
 *@return: undefined
 */

var hasClass = function(el, cn) {
	return (' ' + el.className + ' ').indexOf(' ' + cn + ' ') !== -1
}

var addClass = function(el, cn) {
	if(!hasClass(el, cn)) {
		el.className = (el.className == '') ? cn : el.className + ' ' + cn
	}
}