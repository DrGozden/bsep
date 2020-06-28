package bsep.projekat.projekat.repository;


import org.springframework.data.repository.CrudRepository;

import bsep.projekat.projekat.model.KeyStoreData;


public interface KeyStoreDataRepository extends CrudRepository<KeyStoreData, Integer> {

	KeyStoreData findByKeyStoreFileName(String keyStoreFileName);
}
