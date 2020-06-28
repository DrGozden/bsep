package bsep.projekat.projekat.model;

import java.io.Serializable;

public class CertificateFormData implements Serializable {
	
	private String fileName;
	private String password;
	private String issuer;
	private String passwordIKS;
	private String alias;
	private String serialNumber;
	private String commonName;
	private String organisationUnit;
	private String organisationName;
	private String localityName;
	private String stateName;
	private String country;
	private String validityTime;
	private String email;
	private String purpose;
	private boolean isCA;
	
	public CertificateFormData() {
		// TODO Auto-generated constructor stub
	}
	
	public CertificateFormData(String fileName, String password, String issuer, String passwordIKS, String alias,
			String serialNumber, String commonName, String organisationUnit, String organisationName,
			String localityName, String stateName, String country, String validityTime, String email, String purpose,
			boolean isCA) {
		super();
		this.fileName = fileName;
		this.password = password;
		this.issuer = issuer;
		this.passwordIKS = passwordIKS;
		this.alias = alias;
		this.serialNumber = serialNumber;
		this.commonName = commonName;
		this.organisationUnit = organisationUnit;
		this.organisationName = organisationName;
		this.localityName = localityName;
		this.stateName = stateName;
		this.country = country;
		this.validityTime = validityTime;
		this.email = email;
		this.purpose = purpose;
		this.isCA = isCA;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getIssuer() {
		return issuer;
	}

	public void setIssuer(String issuer) {
		this.issuer = issuer;
	}

	public String getPasswordIKS() {
		return passwordIKS;
	}

	public void setPasswordIKS(String passwordIKS) {
		this.passwordIKS = passwordIKS;
	}

	public String getAlias() {
		return alias;
	}

	public void setAlias(String alias) {
		this.alias = alias;
	}

	public String getSerialNumber() {
		return serialNumber;
	}

	public void setSerialNumber(String serialNumber) {
		this.serialNumber = serialNumber;
	}

	public String getCommonName() {
		return commonName;
	}

	public void setCommonName(String commonName) {
		this.commonName = commonName;
	}

	public String getOrganisationUnit() {
		return organisationUnit;
	}

	public void setOrganisationUnit(String organisationUnit) {
		this.organisationUnit = organisationUnit;
	}

	public String getOrganisationName() {
		return organisationName;
	}

	public void setOrganisationName(String organisationName) {
		this.organisationName = organisationName;
	}

	public String getLocalityName() {
		return localityName;
	}

	public void setLocalityName(String localityName) {
		this.localityName = localityName;
	}

	public String getStateName() {
		return stateName;
	}

	public void setStateName(String stateName) {
		this.stateName = stateName;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getValidityTime() {
		return validityTime;
	}

	public void setValidityTime(String validityTime) {
		this.validityTime = validityTime;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPurpose() {
		return purpose;
	}

	public void setPurpose(String purpose) {
		this.purpose = purpose;
	}

	public boolean getIsCA() {
		return isCA;
	}

	public void setCA(boolean isCA) {
		this.isCA = isCA;
	}
	
}

