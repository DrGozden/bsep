package bsep.project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.security.Security;

import org.bouncycastle.jce.provider.BouncyCastleProvider;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ProjectApplication {

	public static void main(String[] args) {
		Security.addProvider(new BouncyCastleProvider());
		SpringApplication.run(ProjectApplication.class, args);
	}

}
