({

    doInit: function(cmp) {

    },
    addButton2 : function(component, event) {
       var button1 = component.find("button1")
       var button2 = component.find("button2")
       button1.set("v.body", button2);
    },

    removeButton2 : function(component, event) {
           var button1 = component.find("button1")
           button1.set("v.body", []);
     },

    getLabel : function(component, event, helper) {
       var myLabel = component.find("button1").get("v.label");
       component.set("v.buttonLabel", myLabel);
    }
})