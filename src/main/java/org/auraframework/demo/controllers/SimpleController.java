
package org.auraframework.demo.controllers;

//import org.auraframework.demo.notes.DataStore;
//import org.auraframework.demo.notes.Note;
import org.auraframework.system.Annotations.AuraEnabled;
import org.auraframework.system.Annotations.Controller;
import org.auraframework.system.Annotations.Key;

//import com.j256.ormlite.dao.Dao;
//import com.j256.ormlite.dao.DaoManager;

@Controller
public class SimpleController {

        @AuraEnabled
	public static String serverEcho(@Key("firstName")String firstName) {
            return ("From server: " + firstName);
        }
}
