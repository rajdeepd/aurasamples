package org.auraframework.demo.controllers;

import org.auraframework.system.Annotations.AuraEnabled;
import org.auraframework.system.Annotations.Controller;
import org.auraframework.system.Annotations.Key;


@Controller
public class SimpleController {

    @AuraEnabled
	public static String serverEcho(@Key("firstName")String firstName) {
            return ("From server: " + firstName);
        }
}
