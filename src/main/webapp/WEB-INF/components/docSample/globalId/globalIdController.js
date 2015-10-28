({
	getInput : function(cmp, evt) {
		var globalId = cmp.find("button_id").getGlobalId()
		var myText = cmp.find("outName");
		myText.set("v.value", globalId);
	}
})