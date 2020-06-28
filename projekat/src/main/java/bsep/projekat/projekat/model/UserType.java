package bsep.projekat.projekat.model;

public enum UserType {
	KORISNIK, ADMINISTRATOR;

	
	@Override
	  public String toString() {
	    switch(this) {
	      case KORISNIK: return "KORISNIK";
	      case ADMINISTRATOR: return "ADMINISTRATOR";
	      default: throw new IllegalArgumentException();
	    }
	  }
}
