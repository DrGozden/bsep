package bsep.project.controller;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import bsep.project.model.User;
import bsep.project.model.UserRequest;
import bsep.project.model.UserTokenState;
import bsep.project.security.TokenUtils;
import bsep.project.security.auth.JwtAuthenticationRequest;
import bsep.project.service.UserService;

@RestController
@RequestMapping(value = "/auth", produces = MediaType.APPLICATION_JSON_VALUE)
public class AuthenticationController {

	@Autowired
	private TokenUtils tokenUtils;

	@Autowired
	private AuthenticationManager authenticationManager;

//	@Autowired
//	private CustomUserDetailsService userDetailsService;
	
	@Autowired
	private UserService userService;

	@PostMapping("/login")
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtAuthenticationRequest authenticationRequest,
			HttpServletResponse response) {

		final Authentication authentication = authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(),
						authenticationRequest.getPassword()));

		// Ubaci username + password u kontext
		SecurityContextHolder.getContext().setAuthentication(authentication);

		// Kreiraj token
		User user = (User) authentication.getPrincipal();
		String jwt = tokenUtils.generateToken(user.getUsername());
		int expiresIn = tokenUtils.getExpiredIn();

		// Vrati token kao odgovor na uspesnu autentifikaciju
		return ResponseEntity.ok(new UserTokenState(jwt, expiresIn));
	}

	@PostMapping("/signup")
	public ResponseEntity<?> addUser(@RequestBody UserRequest userRequest, UriComponentsBuilder ucBuilder) {

		User existUser = this.userService.findByUsername(userRequest.getUsername());
		if (existUser != null) {
			throw new RuntimeException(userRequest.getId().toString() + "Username already exists");
		}

		User user = this.userService.save(userRequest);
		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(ucBuilder.path("/api/user/{userId}").buildAndExpand(user.getId()).toUri());
		return new ResponseEntity<User>(user, HttpStatus.CREATED);
	}
}
