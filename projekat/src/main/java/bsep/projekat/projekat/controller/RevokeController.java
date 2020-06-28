package bsep.projekat.projekat.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import bsep.projekat.projekat.model.CertificateData;
import bsep.projekat.projekat.model.ResponseText;
import bsep.projekat.projekat.repository.CertificateDataRepository;

@RestController
@RequestMapping("/revokecontroller")
public class RevokeController {
	
	@Autowired
	private CertificateDataRepository certificateDR;
	
	@RequestMapping(value = "/revokeCertificate", method = RequestMethod.POST, headers = { "content-type=application/json" })
	public ResponseEntity revokeCertificate(@RequestBody CertificateData cd) {
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
			cda.setStatus(true);
			certificateDR.save(cda);
	

		} catch (Exception e) {
			e.printStackTrace();
		}

		return new ResponseEntity(new ResponseText("Uspjesno"), HttpStatus.OK);
	}
	
}
