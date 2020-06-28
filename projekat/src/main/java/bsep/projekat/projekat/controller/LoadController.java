package bsep.projekat.projekat.controller;

import java.io.FileInputStream;
import java.security.PublicKey;
import java.security.cert.CertificateFactory;
import java.security.cert.X509Certificate;

import org.ietf.jgss.Oid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import bsep.projekat.projekat.model.CertificateData;
import bsep.projekat.projekat.repository.CertificateDataRepository;

@RestController
@RequestMapping("/loadCertificate")
public class LoadController {

	@Autowired
	private CertificateDataRepository certificateDR;
	
	@RequestMapping(value = "/load", method = RequestMethod.POST, headers = { "content-type=application/json" })
	public CertificateData revokeCertificate(@RequestBody CertificateData cd) {
		String serialNumber = "";
		CertificateData cda = null;
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
			cda = certificateDR.findByCertificateDataSN(serialNumber);
			/*System.out.println(cda);
			
			CertificateFactory fact = CertificateFactory.getInstance("X.509");
		    FileInputStream is = new FileInputStream (cda.getCertificateDataAlias()+".cer");
		    X509Certificate cer = (X509Certificate) fact.generateCertificate(is);
		    PublicKey key = cer.getPublicKey();
		    cda.setCertificateDataSN(cer.getSerialNumber().toString());
		    cda.setIssuer(cer.getIssuerDN().toString());
		    cda.setSubject(cer.getSubjectDN().toString());
		    cda.setType(cer.getType());
		    cda.setSignatureAlg(cer.getSigAlgName());
		    cda.setVersion(cer.getVersion());
		    cda.setPublicKey(cer.getPublicKey().toString());
		    
		    
		    */
		} catch (Exception e) {
			e.printStackTrace();
		}

		return cda;
	}
}
