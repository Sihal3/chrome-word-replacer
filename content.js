var elements = document.getElementsByTagName('*');
var fromword = [];
var toword = [];

chrome.storage.sync.get(['fromword', 'toword'], function(results){
	fromword = results.fromword;
	toword = results.toword;
	for (var k = 0; k < fromword.length; k++){
		for (var i = 0; i < elements.length; i++) {
		var element = elements[i];
			for (var j = 0; j < element.childNodes.length; j++) {
				var node = element.childNodes[j];
				
					if (node.nodeType === 3) {
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
	
});

