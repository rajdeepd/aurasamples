({
	fireEvent : function(cmp, event) {
		var cmpEvent = cmp.getEvent("bubblingEvent");
		cmpEvent.fire();
	}
})