package bsep.projekat.projekat.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import bsep.projekat.projekat.model.CertificateData;
import bsep.projekat.projekat.model.ResponseText;
import bsep.projekat.projekat.repository.CertificateDataRepository;

@RestController
@RequestMapping("/checkStatus")
public class CheckStatusController {

	@Autowired
	private CertificateDataRepository certificateDR;
	
	
	@RequestMapping(value = "/ocspRevoke", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity ocspRevoke(@RequestBody CertificateData cd) {
		String serialNumber = "";
		System.out.println("---------------------");
		System.out.println(cd.getCertificateDataSN());
		try{
			serialNumber = cd.getCertificateDataSN().trim();
			if(serialNumber == null || serialNumber.equals(""))
				return null;
			
		}catch(Exception e) {
			e.printStackTrace();
		}
		try {
			System.out.println(serialNumber);
			CertificateData cda = certificateDR.findByCertificateDataSN(serialNumber);
			if(cda.getStatus()) {
				System.out.println("Povucen");
				return new ResponseEntity(new ResponseText("Povucen"), HttpStatus.OK);
				
			}else {
				return new ResponseEntity(new ResponseText("Nije povucen"), HttpStatus.OK);
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity(new ResponseText("OK"), HttpStatus.OK);

	}

}
