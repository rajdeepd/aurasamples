({
	getInput : function(cmp, evt) {
		var myName = cmp.find("name").get("v.value");
		var greet = getGreetings(myName);
		//var myName = cmp.find("name").get("v.value");
		var myText = cmp.find("outName");
		//var greet = "Hi, " + myName;
		
		myText.set("v.value", greet);
}
})