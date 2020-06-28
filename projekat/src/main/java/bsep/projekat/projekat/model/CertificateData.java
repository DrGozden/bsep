package bsep.projekat.projekat.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "certificateData")
public class CertificateData implements Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer certificateDataId;

	@NotNull
	private String certificateDataSN;

	@NotNull
	private boolean certificateDataCA;

	@NotNull
	private String certificateDataAlias;

	@NotNull
	private String certificateDataKeyStoreName;
	
	@NotNull
	private Boolean status;
	
	private Date endDate;
	
	private String issuer;
	

	private String subject;
	

	private int version;
	

	private String signatureAlg;
	

	private String type;
	

	
	
	
	

	public CertificateData() {
		super();
		// TODO Auto-generated constructor stub
	}




	public CertificateData(@NotNull String certificateDataSN,
			@NotNull boolean certificateDataCA, @NotNull String certificateDataAlias,
			@NotNull String certificateDataKeyStoreName, @NotNull Boolean status, Date endDate, String issuer,
			String subject, int version, String signatureAlg, String type) {
		super();
	
		this.certificateDataSN = certificateDataSN;
		this.certificateDataCA = certificateDataCA;
		this.certificateDataAlias = certificateDataAlias;
		this.certificateDataKeyStoreName = certificateDataKeyStoreName;
		this.status = status;
		this.endDate = endDate;
		this.issuer = issuer;
		this.subject = subject;
		this.version = version;
		this.signatureAlg = signatureAlg;
		this.type = type;
		
	}




	public Integer getCertificateDataId() {
		return certificateDataId;
	}




	public void setCertificateDataId(Integer certificateDataId) {
		this.certificateDataId = certificateDataId;
	}




	public String getCertificateDataSN() {
		return certificateDataSN;
	}




	public void setCertificateDataSN(String certificateDataSN) {
		this.certificateDataSN = certificateDataSN;
	}




	public boolean isCertificateDataCA() {
		return certificateDataCA;
	}




	public void setCertificateDataCA(boolean certificateDataCA) {
		this.certificateDataCA = certificateDataCA;
	}




	public String getCertificateDataAlias() {
		return certificateDataAlias;
	}




	public void setCertificateDataAlias(String certificateDataAlias) {
		this.certificateDataAlias = certificateDataAlias;
	}




	public String getCertificateDataKeyStoreName() {
		return certificateDataKeyStoreName;
	}




	public void setCertificateDataKeyStoreName(String certificateDataKeyStoreName) {
		this.certificateDataKeyStoreName = certificateDataKeyStoreName;
	}




	public Boolean getStatus() {
		return status;
	}




	public void setStatus(Boolean status) {
		this.status = status;
	}




	public Date getEndDate() {
		return endDate;
	}




	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}




	public String getIssuer() {
		return issuer;
	}




	public void setIssuer(String issuer) {
		this.issuer = issuer;
	}




	public String getSubject() {
		return subject;
	}




	public void setSubject(String subject) {
		this.subject = subject;
	}




	public int getVersion() {
		return version;
	}




	public void setVersion(int version) {
		this.version = version;
	}




	public String getSignatureAlg() {
		return signatureAlg;
	}




	public void setSignatureAlg(String signatureAlg) {
		this.signatureAlg = signatureAlg;
	}




	public String getType() {
		return type;
	}




	public void setType(String type) {
		this.type = type;
	}


}

