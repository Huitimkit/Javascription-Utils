/**
 * 事件绑定
 *@method: addEvent
 *@param: { string } el 绑定元素
 *@param: { string } e 事件名   
 *@param: { function } callback 回调函数  
 *@param: { boolean } capture 指定事件是否在捕获或冒泡阶段执行  true：捕获， false：冒泡（默认） 
 *@return: undefined
 */

 var addEvent = function(el, e, callback, capture) {
 	if(!!window.addEventListener) {
 		el.addEventListener(e, callback, !!capture)
 	}else{ // 兼容ie
 		el.attachEvent('on' + e, callback)
 	}
 }