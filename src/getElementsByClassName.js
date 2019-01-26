// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

/*
document.body
element.childNodes
element.classList

 But instead we're going to implement it from scratch:
*/

var getElementsByClassName = function(className) {
	let myArr = [];
	
	let nodeLoop = function (nodes){	
		if (nodes.nodeName === 'BODY' && nodes.classList.contains(className)){
			myArr.push(nodes);
			
			if (nodes.hasChildNodes() === true){
				nodeLoop(nodes.childNodes);
			}
		}
		if (NodeList.prototype.isPrototypeOf(nodes) === true){
			for (let x=0;x<nodes.length;x++){
				let myNode = nodes[x];
				
				if (myNode.nodeType === 1 && myNode.classList.contains(className)){
					myArr.push(myNode);
				}
				if (myNode.hasChildNodes() === true){
					nodeLoop(myNode.childNodes);
				}
			}
		}
		return myArr;
	};
	
	return nodeLoop(document.body);
};
