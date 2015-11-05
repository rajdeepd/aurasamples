({
	getInput : function(cmp, evt) {
		var myName = cmp.find("name").get("v.value");
		var greet = getGreetings(myName);
		var myText = cmp.find("outName"); 
		myText.set("v.value", greet);
}
})