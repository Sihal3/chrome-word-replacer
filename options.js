// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
var fromword = [];
var toword = [];
chrome.storage.sync.get(['fromword','toword'], function(items){
	if (items.fromword) fromword = items.fromword;
	if (items.toworwd) toword = items.toword;
	return;
});
var submitbutton = document.getElementById('submitBtn');
var clearbutton = document.getElementById('clearBtn')
var fromfield = document.getElementById('from-word');
var tofield = document.getElementById('to-word');
var textarea = document.getElementById('set');
submitbutton.onclick = function() {constructRegex()};
clearbutton.onclick = function() {clearAll()};
printWords();
function constructRegex() {
  fromword[fromword.length] = fromfield.value;
  toword[toword.length] = tofield.value;
  updateSettings();
} 
function clearAll(){
	fromword = [];
	toword = [];
	updateSettings();
}
function printWords(){
	var text = "Fromword/Toword\n";
	for (var i = 0; i < fromword.length; i++){
		text += fromword[i] + "/" + toword[i] + "\n"
	}
	textarea.innerHTML = text;
}
function updateSettings(){
	chrome.storage.sync.set({'fromword': fromword}, function() {});
  	chrome.storage.sync.set({'toword': toword}, function() {});
	printWords();
}