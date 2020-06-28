package bsep.projekat.projekat.repository;

import org.springframework.data.repository.CrudRepository;

import bsep.projekat.projekat.model.CertificateData;

public interface CertificateDataRepository extends CrudRepository<CertificateData, Integer> {

	CertificateData findByCertificateDataSN(String certificateDataSN);
	
}
