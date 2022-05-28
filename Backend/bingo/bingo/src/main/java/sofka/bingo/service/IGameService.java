package sofka.bingo.service;

import java.util.List;
import sofka.bingo.domain.Game;

/**Interfaz de metodos del service */
public interface IGameService {
    public List<Game> list();

    public Game save(Game game);

    public String reset();

}
