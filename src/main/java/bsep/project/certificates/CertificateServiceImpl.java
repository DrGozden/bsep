package bsep.project.certificates;


import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.security.KeyPair;
import java.security.cert.CRLException;
import java.security.cert.Certificate;
import java.security.cert.CertificateExpiredException;
import java.security.cert.CertificateNotYetValidException;
import java.security.cert.X509Certificate;
import java.util.ArrayList;

import org.bouncycastle.operator.OperatorCreationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import bsep.project.utils.data.IssuerData;
import bsep.project.utils.data.SubjectData;
import bsep.project.utils.generators.CertificateGenerator;
import bsep.project.utils.generators.KeyGenerator;
import bsep.project.utils.keystore.KeyStoreReader;
import bsep.project.utils.keystore.KeyStoreWriter;

@Service
public class CertificateServiceImpl implements CertificateService {

	@Autowired
	private KeyGenerator keyGenerator;
	@Autowired
	private CertificateGenerator certificateGenerator;
	@Autowired
	private KeyStoreWriter keyStoreWriter;
	@Autowired
	private KeyStoreReader keyStoreReader;

	@Value("${keyStore.password}")
	private String keyStorePassword;
	@Value("${crl.file}")
	private String crlFile;

	@Override
	public Certificate addSelfSigned(SubjectData subject,
			String keyStoreFile,
			String alias,
			String password) {
		KeyPair keyPairSubject = keyGenerator.generateKeyPair();
		subject.setPublicKey(keyPairSubject.getPublic());

		IssuerData issuer = new IssuerData(keyPairSubject.getPrivate(), subject.getX500name());

		X509Certificate cert = certificateGenerator.generateCertificate(subject, issuer, true);
		keyStoreWriter.write(keyStoreFile, alias, keyPairSubject.getPrivate(), password.toCharArray(), cert);
		return cert;
	}

	@Override
	public Certificate addSigned(SubjectData subject,
			String keyStoreFile,
			String alias,
			String password,
			String issuerKeyStoreFile,
			String issuerAlias,
			String issuerPassword,
			boolean isCA) {
		KeyPair keyPairSubject = keyGenerator.generateKeyPair();
		subject.setPublicKey(keyPairSubject.getPublic());

		IssuerData issuer = keyStoreReader.readIssuerFromStore(issuerKeyStoreFile,
				issuerAlias,
				keyStorePassword.toCharArray(),
				issuerPassword.toCharArray());

		X509Certificate cert = certificateGenerator.generateCertificate(subject, issuer, isCA);
		keyStoreWriter.write(keyStoreFile, alias, keyPairSubject.getPrivate(), password.toCharArray(), cert);
		return cert;
	}


		@Override
		public Certificate get(String keyStoreFile, String serialNumber) {
			return keyStoreReader.readCertificate(keyStoreFile,
					keyStorePassword,
					serialNumber);
		}

		@Override
		public boolean isValid(String keyStoreFile, String serialNumber) throws IOException, ClassNotFoundException {
			X509Certificate cert = (X509Certificate) keyStoreReader.readCertificate(keyStoreFile, keyStorePassword, serialNumber);
			//X509CRL crl = CRLUtils.openFromFile(crlFile);
			FileInputStream fos = new FileInputStream(crlFile);
			ObjectInputStream oos = new ObjectInputStream(fos);
			ArrayList<X509Certificate> listCert = (ArrayList<X509Certificate>) oos.readObject();
			oos.close();
			try {
			cert.checkValidity();
			if(listCert.contains(cert))
				return false;
			else
				return true;
			}
			catch (CertificateExpiredException e) {
				return false;
			}
			catch (CertificateNotYetValidException e) {
				return false;
			}
		}

		@Override
		public Certificate revoke(String keyStoreFile, String serialNumber)
				throws CRLException, IOException, OperatorCreationException, ClassNotFoundException {
			X509Certificate cert = (X509Certificate) keyStoreReader.readCertificate(keyStoreFile, keyStorePassword, serialNumber);
			//X509CRL crl = CRLUtils.openFromFile(crlFile);
			System.out.println(cert.toString());
			//X509Certificate issuerCert = (X509Certificate) keyStoreReader.readCertificate(keyStoreFile, keyStorePassword, cert.getIssuerX500Principal().getName());
			ArrayList<X509Certificate> listCert = new ArrayList<>();
			try {
			FileInputStream fis = new FileInputStream(crlFile);
			ObjectInputStream ois = new ObjectInputStream(fis);
			listCert = (ArrayList<X509Certificate>) ois.readObject();
			}
			catch(Exception e) {
				System.out.println("ERRROR");
			}
			listCert.add(cert);
			FileOutputStream fos = new FileOutputStream(crlFile);
			ObjectOutputStream oos = new ObjectOutputStream(fos);
			oos.writeObject(listCert);
			oos.close();

			return cert;
		}




}
