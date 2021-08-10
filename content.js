if(document.body.contains(document.getElementById('wpadminbar'))){
	var elements = document.getElementsByTagName('*');
	var fromword = ["Sanjana"];
	var toword = ["Sanju"];

	for (var k = 0; k < fromword.length; k++){
		for (var i = 0; i < elements.length; i++) {
		var element = elements[i];
			for (var j = 0; j < element.childNodes.length; j++) {
				var node = element.childNodes[j];
				
				if (node.nodeType == Node.TEXT_NODE) {
					var text = node.nodeValue;
					var reggy = new RegExp(fromword[k], 'g'+'i');
					var replacedText = text.replace(reggy, toword[k]);
					if (replacedText !== text) {
						element.replaceChild(document.createTextNode(replacedText), node);
					}
				}
			}
		}
	}
}


