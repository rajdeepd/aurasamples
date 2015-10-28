({
	handleClick : function(cmp, event) {
		var attributeValue = cmp.get("v.text");
		console.log("current text: " + attributeValue);
		//alert(attributeValue)
		var target;
		var eventSource;
		try {
		    eventSource = event.getSource();
			// handling a framework component event
			target = event.getSource(); // this is a Component object
			cmp.set("v.text", "handling a framework component event" + 
					target.get("v.label"));
			
		}catch(err){
			cmp.set("v.text", "handling a native browser event");
		}
		
	}

})