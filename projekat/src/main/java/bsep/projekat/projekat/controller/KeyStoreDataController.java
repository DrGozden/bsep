package bsep.projekat.projekat.controller;

import java.io.FileOutputStream;
import java.security.KeyStore;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import bsep.projekat.projekat.model.KeyStoreData;
import bsep.projekat.projekat.model.ResponseText;
import bsep.projekat.projekat.repository.KeyStoreDataRepository;

@RestController
@RequestMapping("/keystore")
public class KeyStoreDataController {

	@Autowired
	private KeyStoreDataRepository keyStoreRep;

	
	@RequestMapping(value = "/generateKeystore", method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity generateKeystore(@RequestBody KeyStoreData ks) {
		try{
			
			System.out.println(ks.getKeyStoreFileName());
			System.out.println(ks.getKeyStorePassword());
			String fileName = ks.getKeyStoreFileName().trim();
			if(fileName == null || fileName.equals(""))
				return null;
			
			String pass = ks.getKeyStorePassword();
			if(pass == null || pass.equals(""))
				return null;
			
		}catch(Exception e) {
			e.printStackTrace();
		}

		try {
		
			KeyStore keyStore = KeyStore.getInstance("JKS", "SUN");
			String fileName = ks.getKeyStoreFileName();
			String password = ks.getKeyStorePassword();
			keyStore.load(null, password.toCharArray());
			keyStore.store(new FileOutputStream(fileName+".jks"), password.toCharArray());
			KeyStoreData ksd = new KeyStoreData(fileName,password);
			keyStoreRep.save(ksd);
			
			
		} catch (Exception e) {
			e.printStackTrace();
		}

		return new ResponseEntity(new ResponseText("uspesno"), HttpStatus.OK);
	}
}
