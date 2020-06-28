package bsep.projekat.projekat.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import javax.persistence.Id;;

@Entity
@Table(name = "keyStore")
public class KeyStoreData {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer keyStoreId;

	@NotNull
	private String keyStoreFileName;
	
	@NotNull
	private String keyStorePassword;
	
	public KeyStoreData() {
		super();
	}

	public KeyStoreData(String keyStoreFileName,String keyStorePassword) {
		super();
		this.keyStoreFileName = keyStoreFileName;
		this.keyStorePassword = keyStorePassword;
	}

	public Integer getKeyStoreId() {
		return keyStoreId;
	}

	public void setKeyStoreId(Integer keyStoreId) {
		this.keyStoreId = keyStoreId;
	}

	public String getKeyStoreFileName() {
		return keyStoreFileName;
	}

	public void setKeyStoreFileName(String keyStoreFileName) {
		this.keyStoreFileName = keyStoreFileName;
	}

	public String getKeyStorePassword() {
		return keyStorePassword;
	}

	public void setKeyStorePassword(String keyStorePassword) {
		this.keyStorePassword = keyStorePassword;
	}

	
	

}
