package org.auraframework.demo.models;

import java.util.LinkedList;
import java.util.List;

import org.auraframework.system.Annotations.AuraEnabled;
import org.auraframework.system.Annotations.Model;

@Model
public class CustomerModel {
	//String[] customersStr = {"John Doe", "Mike Getting"};
	private List<String> customers;
	public CustomerModel() {
		customers = new LinkedList<String>();
		customers.add("John Doe");
		customers.add("Mark Heynman");
		customers.add("Raj Shekhar");
	}

	@AuraEnabled
	public  List<String> getCustomers() {
		   return  customers ;
	}
}
