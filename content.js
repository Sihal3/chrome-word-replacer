var elements = document.getElementsByTagName('*');
var fromword = "Sanjana";
var toword = "Sanju";

for (var i = 0; i < elements.length; i++) {
var element = elements[i];
	for (var j = 0; j < element.childNodes.length; j++) {
		var node = element.childNodes[j];

			if (node.nodeType === 3) {
				var text = node.nodeValue;
				var reggy = new RegExp(fromword, 'g'+'i');
				var replacedText = text.replace(reggy, toword);
				if (replacedText !== text) {
					element.replaceChild(document.createTextNode(replacedText), node);
				}
			}
	}
}


