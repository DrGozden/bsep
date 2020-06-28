package bsep.projekat.projekat.controller;

import java.io.BufferedInputStream;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.math.BigInteger;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.KeyStore;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.NoSuchProviderException;
import java.security.PrivateKey;
import java.security.SecureRandom;
import java.security.Security;
import java.security.cert.Certificate;
import java.security.cert.CertificateEncodingException;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.bouncycastle.asn1.ASN1ObjectIdentifier;
import org.bouncycastle.asn1.DERIA5String;
import org.bouncycastle.asn1.x500.X500NameBuilder;
import org.bouncycastle.asn1.x500.style.BCStyle;
import org.bouncycastle.asn1.x509.AccessDescription;
import org.bouncycastle.asn1.x509.AuthorityInformationAccess;
import org.bouncycastle.asn1.x509.GeneralName;
import org.bouncycastle.cert.CertIOException;
import org.bouncycastle.cert.X509CertificateHolder;
import org.bouncycastle.cert.X509v3CertificateBuilder;
import org.bouncycastle.cert.jcajce.JcaX509CertificateConverter;
import org.bouncycastle.cert.jcajce.JcaX509v3CertificateBuilder;
import org.bouncycastle.jce.provider.BouncyCastleProvider;
import org.bouncycastle.operator.ContentSigner;
import org.bouncycastle.operator.OperatorCreationException;
import org.bouncycastle.operator.jcajce.JcaContentSignerBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import bsep.projekat.projekat.keystores.KeyStoreReader;
import bsep.projekat.projekat.model.CertificateData;
import bsep.projekat.projekat.model.CertificateFormData;
import bsep.projekat.projekat.model.IssuerData;
import bsep.projekat.projekat.model.KeyStoreData;
import bsep.projekat.projekat.model.ResponseText;
import bsep.projekat.projekat.model.SSCData;
import bsep.projekat.projekat.model.SubjectData;
import bsep.projekat.projekat.repository.CertificateDataRepository;
import bsep.projekat.projekat.repository.KeyStoreDataRepository;

@RestController
@RequestMapping("/Certificate")
public class CertificateController {
	@Autowired
	private KeyStoreDataRepository keyStoreDR;
	
	@Autowired
	private CertificateDataRepository certificateDR;
	
	public ArrayList<String> keystores = new ArrayList<>();
	
	@RequestMapping(value = "/getCAes", method = RequestMethod.GET)
	public ArrayList<String> getKeystores(HttpServletRequest request) throws KeyStoreException, NoSuchProviderException, NoSuchAlgorithmException, CertificateException, IOException {
		ArrayList<String> listaCA = new ArrayList<>();

		System.out.println("Sertifikati: ");
		Date today = new Date();
		List<CertificateData> lista = (List<CertificateData>) certificateDR.findAll();
		for(CertificateData cd:lista) {
			
				System.out.println("-- "+ cd.getCertificateDataAlias()+", "+ cd.isCertificateDataCA());
				if(cd.isCertificateDataCA() && !cd.getStatus() && !today.after(cd.getEndDate())) listaCA.add(cd.getCertificateDataAlias());
		}
		
		return listaCA;
	}
	
	@RequestMapping(value = "/generate", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity generateCA(@RequestBody CertificateFormData caData) {
		try{//serial,common,alias,cdp
			System.out.println(caData.getSerialNumber()+ ", " + caData.getPassword() + ", " + caData.getCommonName() + ", " + caData.getAlias() + ", " + caData.getFileName() + ", " + caData.getEmail() + ", " + caData.getPurpose() + ", " + caData.getValidityTime() + ", " + caData.getCountry() + ", " + caData.getOrganisationName() + ", " + caData.getOrganisationUnit() + ", " + caData.getStateName() + ", " + caData.getLocalityName()+ ", "+caData.getIsCA());
			String serialNumber = caData.getSerialNumber().trim();
			if(serialNumber ==null || serialNumber.equals(""))
				return null;
			
			String commonName = caData.getCommonName().trim();
			if(commonName ==null || commonName.equals(""))
				return null;
			
			String ON = caData.getOrganisationName().trim();
			if(ON ==null || ON.equals(""))
				return null;
			
			String OU = caData.getOrganisationUnit().trim();
			if(OU ==null || OU.equals(""))
				return null;
			
			String country = caData.getCountry().trim();
			if(country ==null || country.equals(""))
				return null;
			
			String locality = caData.getLocalityName().trim();
			if(locality ==null || locality.equals(""))
				return null;
			
			String alias = caData.getAlias().trim();
			if(alias ==null || alias.equals(""))
				return null;
			
			String password = caData.getPassword().trim();
			if(password ==null || password.equals(""))
				return null;
			
			String passwordIKS = caData.getPasswordIKS().trim();
			if(passwordIKS ==null || passwordIKS.equals(""))
				return null;
			
			String fileNAme = caData.getFileName().trim();
			if(fileNAme ==null || fileNAme.equals(""))
				return null;
			
			String email = caData.getEmail().trim();
			if(email ==null || email.equals(""))
				return null;
			
			String purpose = caData.getPurpose().trim();
			if(purpose ==null || purpose.equals(""))
				return null;
			
		}catch(Exception e) {
			e.printStackTrace();
		}

		try {
			
			SubjectData subjectData = generateSubjectData(caData);
			
			
			CertificateData cerData = new CertificateData();
			List<CertificateData> lista = (List<CertificateData>) certificateDR.findAll();
			for(CertificateData cd:lista) {
					if(cd.getCertificateDataAlias().equals(caData.getIssuer()) && !cd.getStatus()) {
						cerData = cd;
					}
			}
			
			
			KeyStoreReader ksr = new KeyStoreReader();
			IssuerData issuerData = ksr.readIssuerFromStore(cerData.getCertificateDataKeyStoreName()+".jks", cerData.getCertificateDataAlias(), caData.getPasswordIKS().toCharArray(), caData.getPasswordIKS().toCharArray());
			X509Certificate certIssuer = (X509Certificate)ksr.readCertificate(cerData.getCertificateDataKeyStoreName() + ".jks", caData.getPasswordIKS(), caData.getIssuer());
			
			Date today = new Date();
			if(today.after(certIssuer.getNotAfter())) {
				return new ResponseEntity(new ResponseText("Sertifikat sa kojim zelite da potpisete je istekao."), HttpStatus.OK);
			}
			
			X509Certificate cert = generateCertificate(subjectData, issuerData);
			
			/*
			KeyPair keyPairIssuer = generateKeyPair();
			IssuerData issuerData = generateIssuerData(keyPairIssuer.getPrivate(), caData);
			X509Certificate cert = generateCertificate(subjectData, issuerData);
			*/
			
			KeyStore keyStore = KeyStore.getInstance("JKS", "SUN");
			KeyPair keyPair = generateKeyPair();
			
			String password = caData.getPassword();
			String alias = caData.getAlias();
			String fileName = caData.getFileName().trim();
			String sn = caData.getSerialNumber();
			
			BufferedInputStream in = new BufferedInputStream(new FileInputStream(fileName+".jks"));
			keyStore.load(in, password.toCharArray());
			keyStore.setCertificateEntry(alias, cert);
			keyStore.setKeyEntry(alias, keyPair.getPrivate(), password.toCharArray(), new Certificate[] {cert});
			keyStore.store(new FileOutputStream(fileName+".jks"), password.toCharArray());
			
			CertificateData cd = new CertificateData();
			cd.setCertificateDataSN(cert.getSerialNumber().toString());
		    cd.setIssuer(cert.getIssuerDN().toString());
		    cd.setSubject(cert.getSubjectDN().toString());
		    cd.setType(cert.getType());
		    cd.setSignatureAlg(cert.getSigAlgName());
		    cd.setVersion(cert.getVersion());
		    cd.setEndDate(cert.getNotAfter());
		    cd.setCertificateDataKeyStoreName(fileName);
		    cd.setStatus(false);
		    cd.setCertificateDataAlias(caData.getAlias());
			cd.setCertificateDataCA(caData.getIsCA());
			
			certificateDR.save(cd);
			
		} catch (Exception e) {
			e.printStackTrace();
		}

		return new ResponseEntity(new ResponseText("OK"), HttpStatus.OK);
	}
	
	private KeyPair generateKeyPair() {
        try {
			KeyPairGenerator keyGen = KeyPairGenerator.getInstance("RSA"); 
			SecureRandom random = SecureRandom.getInstance("SHA1PRNG", "SUN");
			keyGen.initialize(2048, random);
			return keyGen.generateKeyPair();
        } catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		} catch (NoSuchProviderException e) {
			e.printStackTrace();
		}
        return null;
	}
	
	private SubjectData generateSubjectData(CertificateFormData caData) {
		try {
			KeyPair keyPairSubject = generateKeyPair();
			
			//Datumi od kad do kad vazi sertifikat
			SimpleDateFormat iso8601Formater = new SimpleDateFormat("yyyy-MM-dd");
			
			Date startDate = new Date();
			Date endDate = new Date(startDate.getTime() + Integer.parseInt(caData.getValidityTime()) * 24 * 60 * 60 * 1000L);
			
			//Serijski broj sertifikata
			String sn=caData.getSerialNumber();
			//klasa X500NameBuilder pravi X500Name objekat koji predstavlja podatke o vlasniku
			X500NameBuilder builder = new X500NameBuilder(BCStyle.INSTANCE);
		    builder.addRDN(BCStyle.CN, caData.getCommonName());
		    builder.addRDN(BCStyle.O, caData.getOrganisationName());
		    builder.addRDN(BCStyle.OU, caData.getOrganisationUnit());
		    builder.addRDN(BCStyle.C, caData.getCountry());
		    builder.addRDN(BCStyle.L, caData.getLocalityName());
		    builder.addRDN(BCStyle.SERIALNUMBER, caData.getSerialNumber());
		    builder.addRDN(BCStyle.E, caData.getEmail());
		    builder.addRDN(BCStyle.PSEUDONYM, caData.getAlias());
		    
		    //Kreiraju se podaci za sertifikat, sto ukljucuje:
		    // - javni kljuc koji se vezuje za sertifikat
		    // - podatke o vlasniku
		    // - serijski broj sertifikata
		    // - od kada do kada vazi sertifikat
		    return new SubjectData(keyPairSubject.getPublic(), builder.build(), sn, startDate, endDate);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	
	public X509Certificate generateCertificate(SubjectData subjectData, IssuerData issuerData) throws CertIOException {
		try {
			Security.addProvider(new BouncyCastleProvider());
			//Posto klasa za generisanje sertifiakta ne moze da primi direktno privatni kljuc pravi se builder za objekat
			//Ovaj objekat sadrzi privatni kljuc izdavaoca sertifikata i koristiti se za potpisivanje sertifikata
			//Parametar koji se prosledjuje je algoritam koji se koristi za potpisivanje sertifiakta
			JcaContentSignerBuilder builder = new JcaContentSignerBuilder("SHA256WithRSAEncryption");
			//Takodje se navodi koji provider se koristi, u ovom slucaju Bouncy Castle
			builder = builder.setProvider("BC");

			//Formira se objekat koji ce sadrzati privatni kljuc i koji ce se koristiti za potpisivanje sertifikata
			ContentSigner contentSigner = builder.build(issuerData.getPrivateKey());
			
			GeneralName location = new GeneralName(GeneralName.uniformResourceIdentifier, new DERIA5String("http://www.foo.org/ca.crt"));
			
			//Postavljaju se podaci za generisanje sertifiakta
			X509v3CertificateBuilder certGen = new JcaX509v3CertificateBuilder(issuerData.getX500name(),
					new BigInteger(subjectData.getSerialNumber()),
					subjectData.getStartDate(),
					subjectData.getEndDate(),
					subjectData.getX500name(),
					subjectData.getPublicKey()).addExtension(new ASN1ObjectIdentifier("1.3.6.1.5.5.7.1.1"), false, new AuthorityInformationAccess(AccessDescription.id_ad_ocsp, location));
					//Generise se sertifikat
			X509CertificateHolder certHolder = certGen.build(contentSigner);

			//Builder generise sertifikat kao objekat klase X509CertificateHolder
			//Nakon toga je potrebno certHolder konvertovati u sertifikat, za sta se koristi certConverter
			JcaX509CertificateConverter certConverter = new JcaX509CertificateConverter();
			certConverter = certConverter.setProvider("BC");

			//Konvertuje objekat u sertifikat
			return certConverter.getCertificate(certHolder);
		} catch (CertificateEncodingException e) {
			e.printStackTrace();
		} catch (IllegalArgumentException e) {
			e.printStackTrace();
		} catch (IllegalStateException e) {
			e.printStackTrace();
		} catch (OperatorCreationException e) {
			e.printStackTrace();
		} catch (CertificateException e) {
			e.printStackTrace();
		}
		return null;
	}
}
