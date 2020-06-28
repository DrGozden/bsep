package bsep.projekat.projekat.controller;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import bsep.projekat.projekat.model.ResponseText;
import bsep.projekat.projekat.model.User;
import bsep.projekat.projekat.model.UserType;
import bsep.projekat.projekat.repository.UserRepository;

@RestController
@RequestMapping("/user")
public class UserController {	
		
	private Logger logger = LoggerFactory.getLogger(UserController.class) ; 

		@Autowired
		private UserRepository userRep;
		
		@RequestMapping(value = "/loginUser",
				method = RequestMethod.POST,
				consumes = MediaType.APPLICATION_JSON_VALUE,
				produces = MediaType.APPLICATION_JSON_VALUE)
		public boolean loginUser(@RequestBody User user, HttpServletRequest request) {
			//System.out.println();
			User us = userRep.findByEmail(user.getEmail());
			if(us.getUserPassword().equals(user.getUserPassword())) {
				request.getSession().setAttribute("user", us);
				return true;
			}
			
				return false;
		}
		
		@RequestMapping(value = "/logout",
				method = RequestMethod.GET,
				consumes = MediaType.APPLICATION_JSON_VALUE)
		public boolean logout(HttpServletRequest request) {
				request.getSession().invalidate();
				return true;
		}
		
		@RequestMapping(value = "/getUser",
				method = RequestMethod.GET,
				produces = MediaType.APPLICATION_JSON_VALUE)
		public ResponseText getUser(HttpServletRequest request){
			
			User user = (User)request.getSession().getAttribute("user");

			return (user == null) ? new ResponseText(null) : new ResponseText(user.getUserRole().toString());
		}
		
		
		@RequestMapping(value = "/init",
				method = RequestMethod.GET,
				produces = MediaType.APPLICATION_JSON_VALUE)
		public boolean init(){
			User user1 = new User("admin@gmail.com", "admin", UserType.ADMINISTRATOR);
			User us1 = new User("prvi@gmail.com", "prvi", UserType.KORISNIK);
			User us2 = new User("drugi@gmail.com", "drugi", UserType.KORISNIK);
			userRep.save(user1);
			userRep.save(us1);
			userRep.save(us2);
			return true;
			}
		
		
		
	}