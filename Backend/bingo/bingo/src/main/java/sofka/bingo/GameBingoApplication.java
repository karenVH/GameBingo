package sofka.bingo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class GameBingoApplication {

	public static void main(String[] args) {
		SpringApplication.run(GameBingoApplication.class, args);
		System.out.print("ejecutando");
	}

}
