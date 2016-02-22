({

    doInit: function(cmp) {

    },
    setIsDefined : function(component, event) {
       var isDefined = !$A.util.isUndefined(component.get("v.buttonLabel"));
       component.set("v.isDefined", isDefined);
    },

    getLabel : function(component, event, helper) {
       var myLabel = component.find("button1").get("v.label");
       component.set("v.buttonLabel", myLabel);
    }
})