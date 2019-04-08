/**
 * 移除事件绑定
 *@method: removeEvent
 *@param: { string } el 绑定元素
 *@param: { string } e 事件名   
 *@param: { function } callback 回调函数  
 *@param: { boolean } capture 指定事件是否在捕获或冒泡阶段执行  true：捕获， false：冒泡（默认） 
 *@return: undefined
 */

var removeEvent = function(el, e, callback, capture) {
	if(!!window.addEventListener) {
		el.removeEventListener(e, callback, !!capture)
	}else{
		el.detachEvent('on' + e, callback)
	}
}