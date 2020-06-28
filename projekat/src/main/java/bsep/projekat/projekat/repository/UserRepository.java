package bsep.projekat.projekat.repository;

import org.springframework.data.repository.CrudRepository;

import bsep.projekat.projekat.model.User;

public interface UserRepository extends CrudRepository<User, Integer> {

	User findByEmail(String email);

}
