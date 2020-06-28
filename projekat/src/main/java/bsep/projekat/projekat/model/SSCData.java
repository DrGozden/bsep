package bsep.projekat.projekat.model;

import java.io.Serializable;

public class SSCData implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	public String fileName;
	public String password;
	public String aliasGC;
	public String serialNumberGC;
	public String commonNameGC;
	public String organisationUnitGC;
	public String organisationNameGC;
	public String localityNameGC;
	public String stateNameGC;
	public String countryGC;
	public String validityTimeGC;
	public String emailGC;
	public String aiaGC;
	public String cdpGC;
	public String purposeGC;
	
	public SSCData() {
		super();
		// TODO Auto-generated constructor stub
	}

	public SSCData(String fileName, String password, String aliasGC, String serialNumberGC, String commonNameGC,
			String organisationUnitGC, String organisationNameGC, String localityNameGC, String stateNameGC,
			String countryGC, String validityTimeGC, String emailGC, String purposeGC) {
		super();
		this.fileName = fileName;
		this.password = password;
		this.aliasGC = aliasGC;
		this.serialNumberGC = serialNumberGC;
		this.commonNameGC = commonNameGC;
		this.organisationUnitGC = organisationUnitGC;
		this.organisationNameGC = organisationNameGC;
		this.localityNameGC = localityNameGC;
		this.stateNameGC = stateNameGC;
		this.countryGC = countryGC;
		this.validityTimeGC = validityTimeGC;
		this.emailGC = emailGC;
		this.purposeGC = purposeGC;
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

	public String getAliasGC() {
		return aliasGC;
	}

	public void setAliasGC(String aliasGC) {
		this.aliasGC = aliasGC;
	}

	public String getSerialNumberGC() {
		return serialNumberGC;
	}

	public void setSerialNumberGC(String serialNumberGC) {
		this.serialNumberGC = serialNumberGC;
	}

	public String getCommonNameGC() {
		return commonNameGC;
	}

	public void setCommonNameGC(String commonNameGC) {
		this.commonNameGC = commonNameGC;
	}

	public String getOrganisationUnitGC() {
		return organisationUnitGC;
	}

	public void setOrganisationUnitGC(String organisationUnitGC) {
		this.organisationUnitGC = organisationUnitGC;
	}

	public String getOrganisationNameGC() {
		return organisationNameGC;
	}

	public void setOrganisationNameGC(String organisationNameGC) {
		this.organisationNameGC = organisationNameGC;
	}

	public String getLocalityNameGC() {
		return localityNameGC;
	}

	public void setLocalityNameGC(String localityNameGC) {
		this.localityNameGC = localityNameGC;
	}

	public String getStateNameGC() {
		return stateNameGC;
	}

	public void setStateNameGC(String stateNameGC) {
		this.stateNameGC = stateNameGC;
	}

	public String getCountryGC() {
		return countryGC;
	}

	public void setCountryGC(String countryGC) {
		this.countryGC = countryGC;
	}

	public String getValidityTimeGC() {
		return validityTimeGC;
	}

	public void setValidityTimeGC(String validityTimeGC) {
		this.validityTimeGC = validityTimeGC;
	}

	public String getEmailGC() {
		return emailGC;
	}

	public void setEmailGC(String emailGC) {
		this.emailGC = emailGC;
	}

	public String getPurposeGC() {
		return purposeGC;
	}

	public void setPurposeGC(String purposeGC) {
		this.purposeGC = purposeGC;
	}
	
	
	
}