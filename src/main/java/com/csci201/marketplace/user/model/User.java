package com.csci201.marketplace.user.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import java.util.Set;

import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.concurrent.ExecutorService;

public class User { //User interacts with mapper
	private transient int userID;
	private String name;
	private String password;
	private String email;
	public transient static BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
	
	//itemID = key, bid to buy = value
	private transient Set<Integer> toBuy;
	private transient Set<Integer> forSale;
	
	
	public User(@JsonProperty("user_id") int id, @JsonProperty("name")String name,
				@JsonProperty("email") String email, @JsonProperty("password") String password)
	{
		this.userID = userID;
		this.name = name;
		this.email = email;
		this.password = password;
	}

	public int getUserID() {
		return userID;
	}

	public void setUserID(int userID) {
		this.userID = userID;
	}	

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = encoder.encode(password);
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getEmail() {
		return email;
	}

	public Set<Integer> getForSale() {
		return forSale;
	}

	public void setForSale(Set<Integer> forSale) {
		this.forSale = forSale;
	}

	public Set<Integer> getToBuy() {
		return toBuy;
	}

	public void setToBuy(Set<Integer> toBuy) {
		this.toBuy = toBuy;
	}
	
}