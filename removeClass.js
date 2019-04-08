/**
 * 删除指定css类名
 *@method: removeClass
 *@param: { obj } el 操作元素
 *@param: { string } cn 需要移除的css类名
 *@return: undefined
 */

var trim = function(str) {
	return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '')
}

var removeClass = function(el, cn) {
	el.className = trim((' ' + el.className + ' ').replace(' ' + cn + ' ', ' '))
}