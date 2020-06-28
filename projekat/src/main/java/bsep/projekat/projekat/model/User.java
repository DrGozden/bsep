package bsep.projekat.projekat.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "user")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer userId;
	
	@NotNull

	private String email;
	
	@NotNull
	private String userPassword;
	
	@NotNull
	private UserType userRole;

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	public User(@NotNull String email, @NotNull String userPassword, @NotNull UserType userRole) {
		super();
		this.email = email;
		this.userPassword = userPassword;
		this.userRole = userRole;
	}



	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}



	public UserType getUserRole() {
		return userRole;
	}



	public void setUserRole(UserType userRole) {
		this.userRole = userRole;
	}
	
	
}