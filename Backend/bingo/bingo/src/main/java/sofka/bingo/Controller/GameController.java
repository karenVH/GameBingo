import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import sofka.bingo.domain.Game;
import sofka.bingo.util.Response;

/**
 * Clase que controla la creacion del juego
 */
@RestController
public class GameController{
    
    @Autowired
    private GameService gameService;

    private Response response = new Response();

    Game game = new Game();

    /**
     * Metodo para listar el juego
     */
    @GetMapping(path="/game")
    public Response list() {
        try{
            response.data = gameService.list();
        }catch (Exception exc){
            response.error = true;
            response.message = exc.getMessage();
            response.status = "ERROR";
        }
        return response;
    }

    /**
     * Metodo para crear un juego
     */
    @PostMapping(path="/gamecreate")
    public ResponseEntity<Game> create(Game game) {
        log.info("crearJuego: {}", game);
        gameService.save(game);
        return new ResponseEntity<>(game, HttpStatus.CREATED);
    }

}