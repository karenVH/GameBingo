package sofka.bingo.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;
import java.io.Serializable;

@Data
@Entity
@Table(name = "gameb, gameDetails, playerCard", schema = "gameBingodb")

public class Game implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * atributos correspondientes a columnas de las tablas
     */

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idGame")
    private Long id;

    @Column(name = "gameStatus")
    private int gameStatus;

    @Column(name = "letter")
    private String letter;

    @Column(name = "number")
    private int number;

}
