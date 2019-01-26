// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

let trimUtility = function(str){
	if (str.slice(-1) === ','){
		str = str.slice(0,-1);
	}
	return str;
};

var stringifyJSON = function(obj) {
	let objType = typeof obj;
	
	if (obj === null){
		return 'null';
	}
	else if (objType === 'function' || objType === 'undefined'){
		//  JSON does not allow to stringify functions or undefined values,
		return null;
	}
	else if (objType === 'number' || objType === 'boolean'){
		return obj.toString();
	}
	else if (objType === 'string'){
		return '\"' + obj.toString() + '\"';
	}
	else if (objType === 'object' && Array.isArray(obj)){
		
		let arrStr = obj.reduce(function (arrStr, elem) {
			return arrStr + (stringifyJSON(elem) + ',');
		  }, '[');
		
		return trimUtility(arrStr) + ']';
	}
	else if (objType === 'object' && !Array.isArray(obj)){
		let objStr = '{';
		
		for (let key in obj){
			let val = stringifyJSON(obj[key]);
			
			if (val){
				objStr += '\"' + key + '":' + val + ',';
			}
			else {
				
			}
		}
		
		return trimUtility(objStr) + '}';
	}
};

