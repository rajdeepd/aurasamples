({
	getInput : function(cmp, evt) {
		var localId = cmp.find("button_local_id").getLocalId()
		var myText = cmp.find("outName");
		myText.set("v.value", localId);
	}
})