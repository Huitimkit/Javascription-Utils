/**
 * 移除字符串前后空格
 *@method: trim
 *@param: { string } str 操作字符串
 *@return: str
 */

var trim = function(str) {
	//return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '')
	return str.trim ? str.trim() : str.replace(/[^\w]/g,'')
}