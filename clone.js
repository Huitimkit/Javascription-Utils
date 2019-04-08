/**
 * 实现深拷贝和浅拷贝功能
 *@method: copy
 *@param: { obj } obj 源对象
 *@param: { boolean } deep 是否深拷贝
 *@return: { obj } obj
 */

 // 类型判断
var $ = (function() {
	'use strict';
	var $ = {};
	var types = 'Array Object String Date RegExp Function Boolean Number Null Underfined'.split(' ');

	function type() {
		return Object.prototype.toString.call(this).slice(8, -1);
	}

	for(var i = 0; i < types.length; i++) {
		$['is' + types[i]] = (function() {
			return function(elem) {
				return type.call(elem) === self;
			}
		})(types[i])
	}

	return $
})();

function copy (obj,deep) { 
    if (obj === null || (typeof obj !== "object" && !$.isFunction(obj))) { 
        return obj; 
    } 

    if ($.isFunction(obj)) {
    	return new Function("return " + obj.toString())();
    }
    else {
        var name, target = $.isArray(obj) ? [] : {}, value; 

        for (name in obj) { 
            value = obj[name]; 
            if (value === obj) {
            	continue;
            }

            if (deep && ($.isArray(value) || $.isObject(value))) {
            	target[name] = copy(value,deep);
            }
            else {
            	target[name] = value;
            } 
        } 
        return target;
    }　        
}
