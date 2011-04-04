/*  ginDeVine:2011 (http://svrv.net)  */

var Fe = Array.prototype.forEach
HTMLElement.prototype.splitHTML = (function(){
	var defTN = "fragment"
	  , defSA = ""
	  , black = ["script","style","canvas","audio","video","img"]
	  , RegFn  = function(a) { return (a=a.substr(a.search(">")+1)).substr(0,a.search("<")) }
	return function(tagName,splitAt){
		tagName = (tagName!==undefined?tagName:defTN).toLowerCase();
		splitAt = splitAt!==undefined?splitAt:defSA;
		var parent = this
		  , children = parent.childNodes
		  , oldLength = parent.childNodes.length;
		Fe.call(children, function(child,i){
			if(!(child = parent.childNodes[i+(children.length-oldLength)])) return;
			var name = child.nodeName.toLowerCase();
			if(name == "#text"){
				var oldValue = child.nodeValue;
				var newValue = "<"+tagName+">"+oldValue.split(splitAt).join("</"+tagName+">"+splitAt+"<"+tagName+">")+"</"+tagName+">";
				if(~newValue.search(/\s/))newValue = newValue.replace(RegExp("<"+tagName+">(\\s*)?</"+tagName+">","g"),RegFn);
				if(~oldValue.search(/[<>]/))oldValue = oldValue.replace(/</g,"&lt;").replace(/>/g,"&gt;")
				parent.innerHTML = parent.innerHTML.replace(oldValue,newValue)
			} else if(name!=tagName && !!child.splitHTML && !~black.indexOf(name)) child.splitHTML(tagName, splitAt);
		})
	}
}())